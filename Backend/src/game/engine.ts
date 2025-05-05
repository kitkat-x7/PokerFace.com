// Game Logic

import { get_gamedetails_cache, get_player_wallet, get_playergame_cache, get_room_cache, set_gamedetails_cache, set_playergame_cache, set_room_cache } from "../services/cache/game";
import { Blind, Flop, Hole, River, Showdown, shuffle, Turn } from "./moves"
import { Iteration_Card, Room_Allocation, Ws_map, Ws_Queue } from "./types"
let player_timeoutid=new Map<number, { timeout: NodeJS.Timeout, resolve: () => void } | null>();
// Suffle - map with 52 cards
// each has a number [1,52] 
// Randomise the sequence of [1 - 52]
// Distribute the cards among the members

// Rounds - Each Rounds has a phase  
// act according to the phase


export const game=async (timer:number,roomid:number)=>{
    await Game_halt(timer);
    await Poker_Game(roomid);
    game(100000,roomid);
}

const Game_halt=(timer:number)=>{
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timer);
    });
}




//have to Scrutinize
export const Poker_Game=async (roomid:number)=>{
    const cards_deck=shuffle(Iteration_Card); 
    // Set Game details while Create_Room in Util 
    const game=await get_gamedetails_cache(roomid);
    const room_data=Ws_map.get(roomid) as Room_Allocation[];
    set_gamedetails_cache({
        roomid: game.roomid,
        index: game.index,
        amount: game.amount,
        cards: game.cards,
        stage: 'Blinds',
        chip: game.chip,
        player_turn:-1
    });
    await Blind(roomid);
    const room=await get_room_cache(roomid);
    let Data={
        round:game.stage,
        details:{
            smallblind:room.smallblind,
            bigblind:room.bigblind,
            dealer:room.dealer,
            turn:room.turn
        }
    }
    for(let player of room_data){
        player.socket.send(JSON.stringify(Data));
    }
    //Ask for fees for the SB & BB player
    set_gamedetails_cache({
        roomid: game.roomid,
        index: game.index,
        amount: game.amount,
        cards: game.cards,
        stage: 'Hole',
        chip: game.chip,
        player_turn:-1
    });
    await Hole(roomid,cards_deck);
    for(let player of room_data){
        const Data_player=await get_playergame_cache(roomid,player.playerid);
        const Data={
            round:'Hole',
            details:Data_player.hole_cards
        }
        player.socket.send(JSON.stringify(Data));
    }
    await player_turn(roomid);
    set_gamedetails_cache({
        roomid: game.roomid,
        index: game.index,
        amount: game.amount,
        cards: game.cards,
        stage: 'Flop',
        chip: game.chip,
        player_turn:-1
    });
    const Flop_Cards=await Flop(roomid,cards_deck);
    for(let player of room_data){
        const Data={
            round:'Flop',
            details:Flop_Cards
        }
        player.socket.send(JSON.stringify(Data));
    }
    await player_turn(roomid);
    set_gamedetails_cache({
        roomid: game.roomid,
        index: game.index,
        amount: game.amount,
        cards: game.cards,
        stage: 'Turn',
        chip: game.chip,
        player_turn:-1
    });
    const Turn_Cards=await Turn(roomid,cards_deck);
    for(let player of room_data){
        const Data={
            round:'Turn',
            details:Turn_Cards
        }
        player.socket.send(JSON.stringify(Data));
    }
    await player_turn(roomid);
    set_gamedetails_cache({
        roomid: game.roomid,
        index: game.index,
        amount: game.amount,
        cards: game.cards,
        stage: 'River',
        chip: game.chip,
        player_turn:-1
    });
    const River_Cards=await River(roomid,cards_deck);
    for(let player of room_data){
        const Player={
            round:'River',
            details:River_Cards
        }
        player.socket.send(JSON.stringify(Player));
    }
    await player_turn(roomid);
    set_gamedetails_cache({
        roomid: game.roomid,
        index: game.index,
        amount: game.amount,
        cards: game.cards,
        stage: 'Showdown',
        chip: game.chip,
        player_turn:-1
    });
    const Winners=await Showdown(roomid);
    for(let player of room_data){
        const Player={
            round:'Showdown',
            details:Winners
        }
        if(player.socket.readyState===WebSocket.OPEN){
            player.socket.send(JSON.stringify(Player));
        }
    }
}

export const player_turn=async (roomid:number)=>{
    const Queue=Ws_Queue.get(roomid) as number[];
    const room=await get_room_cache(roomid);
    let game=await get_gamedetails_cache(roomid);
    let turn=room.turn;
    let last=-1;
    let chips=0;
    let player=await get_playergame_cache(roomid,Queue[turn]);
    if(player.hand=='Fold' || player.hand=='All In'){
        last=turn;
        //check
        chips=player.bet_amount;
        turn=(turn+1)%Queue.length;
    }else{
        await create_timer(30000,roomid,Queue[turn]);
        chips=game.chip;
        last=turn;
        turn=(turn+1)%Queue.length;
    }
    while(true){
        while(Queue[turn]===-1){
            turn=(turn+1)%Queue.length;
        }
        if(turn===last){
            break;
        }
        const player=await get_playergame_cache(roomid,Queue[turn]);
        if(player.hand=='Fold' || player.hand=='All In'){
            turn=(turn+1)%Queue.length;
            continue;
        }
        await create_timer(30000,roomid,Queue[turn]);
        game=await get_gamedetails_cache(roomid);
        if(game.chip>chips){
            chips=game.chip;
            last=turn;
        }
        turn=(turn+1)%Queue.length;
    }
    return;
}


const create_timer=(timer:number,roomid:number,playerid:number)=>{
    return new Promise<void>((resolve) => {
        const timeout=setTimeout(()=>{
            Fold(roomid,playerid);
            resolve();
        },timer);//timeout has the exact timeoutid given by settimeout
        player_timeoutid.set(roomid,{timeout,resolve}); // saving the exact resolve function in the map which get's resolved if we clear timeout
    });
}

export const close_timer=(roomid:number)=>{
    const timeid=player_timeoutid.get(roomid);
    if(timeid){
        clearTimeout(timeid.timeout as NodeJS.Timeout);
        timeid.resolve();
        player_timeoutid.set(roomid,null);
    }
}



export const hand=async (roomid:number,playerid:number,amount:number,Hand_Fold:boolean)=>{
    const chip=(await get_gamedetails_cache(roomid)).chip;
    const wallet=await get_player_wallet(playerid);
    if(Hand_Fold==true){
        Fold(roomid,playerid);
    }
    else if(chip==0 && amount==0){
        Check(roomid,playerid);
    }
    else if(amount>wallet){
        return false;
    }
    else if(amount<chip && amount<wallet){
        return false;
    }
    else if(amount==wallet){
        All_in(roomid,playerid,amount);
    }
    else if(amount>chip){
        Raise(roomid,playerid,amount);
    }else{
        Call(roomid,playerid,amount);
    }
}


export const Check=async (roomid:number,playerid:number)=>{
    const player_data=await get_playergame_cache(roomid,playerid);
    set_playergame_cache({
        roomid,
        playerid,
        hole_cards: player_data.hole_cards,
        status: player_data.status,
        hand: 'Check',
        bet_amount: player_data.bet_amount,
        hand_result_type: player_data.hand_result_type,
        values: player_data.values
    });
    return true;
}


export const Fold=async (roomid:number,playerid:number)=>{
    const player_data=await get_playergame_cache(roomid,playerid);
    set_playergame_cache({
        roomid,
        playerid,
        hole_cards: player_data.hole_cards,
        status: player_data.status,
        hand: 'Fold',
        bet_amount: player_data.bet_amount,
        hand_result_type: player_data.hand_result_type,
        values: player_data.values
    });
    return true;
}

export const Call=async (roomid:number,playerid:number,amount:number)=>{
    const player_data=await get_playergame_cache(roomid,playerid);
    const game=await get_gamedetails_cache(roomid);
    set_playergame_cache({
        roomid,
        playerid,
        hole_cards: player_data.hole_cards,
        status: player_data.status,
        hand:'Call',
        bet_amount: player_data.bet_amount+amount,
        hand_result_type: player_data.hand_result_type,
        values: player_data.values
    });
    set_gamedetails_cache({
        roomid: game.roomid,
        index: game.index,
        amount: game.amount+amount,
        cards: game.cards,
        stage: game.stage,
        chip: game.chip,
        player_turn:-1
    });
    return true;
}

export const Raise=async (roomid:number,playerid:number,amount:number)=>{
    const player_data=await get_playergame_cache(roomid,playerid);
    const game=await get_gamedetails_cache(roomid);
    set_playergame_cache({
        roomid,
        playerid,
        hole_cards: player_data.hole_cards,
        status: player_data.status,
        hand:'Raise',
        bet_amount: player_data.bet_amount+amount,
        hand_result_type: player_data.hand_result_type,
        values: player_data.values
    });
    set_gamedetails_cache({
        roomid: game.roomid,
        index: game.index,
        amount: game.amount+amount,
        cards: game.cards,
        stage: game.stage,
        chip: amount,
        player_turn:-1
    });
    return true;
}

export const All_in=async (roomid:number, playerid:number, amount:number)=>{
    const player_data=await get_playergame_cache(roomid,playerid);
    const wallet=await get_player_wallet(playerid);
    const game=await get_gamedetails_cache(roomid);
    set_playergame_cache({
        roomid,
        playerid,
        hole_cards: player_data.hole_cards,
        status: player_data.status,
        hand:'All In', 
        bet_amount: wallet,
        hand_result_type: player_data.hand_result_type,
        values: player_data.values
    });
    if(amount<=game.chip){
        set_gamedetails_cache({
            roomid: game.roomid,
            index: game.index,
            amount: game.amount+amount,
            cards: game.cards,
            stage: game.stage,
            chip: game.chip,
            player_turn:-1
        });
    }else{
        set_gamedetails_cache({
            roomid: game.roomid,
            index: game.index,
            amount: game.amount+amount,
            cards: game.cards,
            stage: game.stage,
            chip: amount,
            player_turn:-1
        });
    }
    return true;
}
