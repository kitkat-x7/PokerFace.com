import { get_gamedetails_cache, get_playergame_cache, get_room_cache, set_gamedetails_cache, set_playergame_cache, set_room_cache } from "../services/cache/game";
import { Card_Details, Deck, HAND_RANKINGS, Iteration_Card, Room_Allocation, suit_type, Suit_Type_Ws, suit_value, Suit_Value_Ws, Ws_map, Ws_Queue } from "./types";
import { Flush, Four_of_a_Kind, FullorThree, generate, Pair } from "./utils";

//Fisher-Yates Shuffle
export const shuffle=(Iteration_Card: number[])=>{
    for (let i = Iteration_Card.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[Iteration_Card[i],Iteration_Card[j]] = [Iteration_Card[j], Iteration_Card[i]];
	}
	return Iteration_Card;
}
// Starting
// smallblind:-1,
// bigblind:-1,
// dealer:-1,
// turn:-1,
// After One Round 
// It will take the reference of Dealer
export const Blind=async (roomid:number)=>{
    const room=await get_room_cache(roomid);
    let D=room.dealer;
    let SB=room.smallblind;
    let BB=room.bigblind;
    let turn=room.turn;
    let index=(D+1)%10;
    const Queue=Ws_Queue.get(roomid) as number[];
    if(room.playercount===2){
        index=generate(index,Queue);
        SB=index;
        D=index;
        turn=index;
        index=(index+1)%10;
        index=generate(index,Queue);
        BB=index;
    }
    else if(room.playercount===3){
        index=generate(index,Queue);
        SB=index;
        D=index;
        index=(index+1)%10;
        index=generate(index,Queue);
        BB=index;
        index=(index+1)%10;
        index=generate(index,Queue);
        turn=index;
    }else{
        index=generate(index,Queue);
        D=index;
        index=(index+1)%10;
        index=generate(index,Queue);
        SB=index;
        index=(index+1)%10;
        index=generate(index,Queue);
        BB=index;
        index=(index+1)%10;
        index=generate(index,Queue);
        turn=index;
    }
    set_room_cache({
        roomid:room.roomid,
        minsum:room.minsum,
        smallblind:SB,
        bigblind:BB,
        dealer:D,
        pointer:room.pointer,
        turn:turn,
        playercount:room.playercount,
        status:room.status,
        creatorid:room.creatorid,
        starttime:room.starttime
    });
}

export const Hole = async (roomid: number, cards: number[]) => {
    const game = await get_gamedetails_cache(roomid);
    const Players = Ws_map.get(roomid) as Room_Allocation[];
    for (const value of Players) {
        const player_data = await get_playergame_cache(roomid, value.playerid);
        player_data.hole_cards = [
            Deck.get(cards[game.index]) as Card_Details,
            Deck.get(cards[game.index + 1]) as Card_Details
        ];
        game.index += 2;
        set_playergame_cache({
            roomid,
            playerid: player_data.playerid,
            hole_cards: player_data.hole_cards,
            status: player_data.status,
            hand: player_data.hand,
            bet_amount: player_data.bet_amount,
            hand_result_type: player_data.hand_result_type,
            values: player_data.values
        });
    }
    game.stage = 'Pre Flop';
    set_gamedetails_cache({
        roomid: game.roomid,
        index: game.index,
        amount: game.amount,
        cards: game.cards,
        stage: game.stage,
        chip: game.chip,
        player_turn:game.player_turn
    });
};

export const Flop=async (roomid:number,cards:number[])=>{
    const game=await get_gamedetails_cache(roomid);
    game.cards=[Deck.get(cards[game.index]) as Card_Details,Deck.get(cards[game.index+1]) as Card_Details,Deck.get(cards[game.index+2]) as Card_Details];
    set_gamedetails_cache({
        roomid:game.roomid,
        index:game.index+3,
        amount:game.amount,
        cards:game.cards,
        stage:'Pre Turn',
        chip: game.chip,
        player_turn:game.player_turn
    });
    return game.cards;
}

export const Turn=async (roomid:number,cards:number[])=>{
    const game=await get_gamedetails_cache(roomid);
    game.cards.push(Deck.get(cards[game.index]) as Card_Details);
    set_gamedetails_cache({
        roomid:game.roomid,
        index:game.index+1,
        amount:game.amount,
        cards:game.cards,
        stage:'Pre River',
        chip: game.chip,
        player_turn:game.player_turn
    });
    return Deck.get(cards[game.index]) as Card_Details;
}

export const River=async (roomid:number,cards:number[])=>{
    const game=await get_gamedetails_cache(roomid);
    game.cards.push(Deck.get(cards[game.index]) as Card_Details);
    set_gamedetails_cache({
        roomid:game.roomid,
        index:game.index+1,
        amount:game.amount,
        cards:game.cards,
        stage:'Pre Showdown',
        chip: game.chip,
        player_turn:game.player_turn
    });
    return Deck.get(cards[game.index]) as Card_Details;
}

export const Showdown = async (roomid: number) => {
    const game = await get_gamedetails_cache(roomid);
    const Players = Ws_map.get(roomid) as Room_Allocation[];
    for (const player of Players) {
        const player_data = await get_playergame_cache(roomid, player.playerid);
        if(player_data.hand=='Fold'){
            continue;
        }
        for (const card of game.cards) {
            player_data.hole_cards.push(card);
        }
        let Card_suits: suit_type[] = [];
        let Card_values: suit_value[] = [];
        let flag = false;
        for(const card of player_data.hole_cards){
            Card_suits.push(card.suit);
            Card_values.push(card.value);
            Suit_Type_Ws.set(card.suit, (Suit_Type_Ws.get(card.suit) || 0) + 1);
            Suit_Value_Ws.set(card.value, (Suit_Value_Ws.get(card.value) || 0) + 1);
        }
        const FS_check = Flush(Card_suits, Card_values);
        const Four_of_a_Kind_check = Four_of_a_Kind();
        const FullorThree_check = FullorThree();
        const Pair_check = Pair();
        if (!flag && FS_check.Flush && FS_check.Straight) {
            player_data.hand_result_type = HAND_RANKINGS.StraightFlush;
            player_data.values = FS_check.cards;
            flag = true;
        }
        if (!flag && Four_of_a_Kind_check.Four) {
            player_data.hand_result_type = HAND_RANKINGS.FourOfAKind;
            player_data.values = Four_of_a_Kind_check.cards;
            flag = true;
        }
        if (!flag && FullorThree_check.Full) {
            player_data.hand_result_type = HAND_RANKINGS.FullHouse;
            player_data.values = FullorThree_check.cards;
            flag = true;
        }
        if (!flag && FS_check.Flush) {
            player_data.hand_result_type = HAND_RANKINGS.Flush;
            player_data.values = FS_check.cards;
            flag = true;
        }
        if (!flag && FS_check.Straight) {
            player_data.hand_result_type = HAND_RANKINGS.Straight;
            player_data.values = FS_check.cards;
            flag = true;
        }
        if (!flag && FullorThree_check.Three) {
            player_data.hand_result_type = HAND_RANKINGS.ThreeOfAKind;
            player_data.values = FullorThree_check.cards;
            flag = true;
        }
        if (!flag && Pair_check.Two_pair) {
            player_data.hand_result_type = HAND_RANKINGS.TwoPair;
            player_data.values = Pair_check.cards;
            flag = true;
        }
        if (!flag && Pair_check.One_pair) {
            player_data.hand_result_type = HAND_RANKINGS.Pair;
            player_data.values = Pair_check.cards;
            flag = true;
        }
        if (!flag && Pair_check.High) {
            player_data.hand_result_type = HAND_RANKINGS.HighCard;
            player_data.values = Pair_check.cards;
            flag = true;
        }
        set_playergame_cache({
            roomid: player_data.roomid,
            playerid: player_data.playerid,
            hole_cards: player_data.hole_cards,
            bet_amount: player_data.bet_amount,
            status: player_data.status,
            hand: player_data.hand,
            hand_result_type: player_data.hand_result_type,
            values: player_data.values
        });
        Card_suits.length = 0;// Clears the array
        Card_values.length = 0;         
        Suit_Type_Ws.clear();           
        Suit_Value_Ws.clear();// Clears the Map

    }
    let playerid: number[] = [];
    let maxRank = -1;
    for (const player of Players) {
        const player_data = await get_playergame_cache(roomid, player.playerid);
        if(player_data.hand=='Fold'){
                continue;
        }
        if (player_data.hand_result_type > maxRank) {
            maxRank = player_data.hand_result_type;
        }
    }
    for (const player of Players) {
        const player_data = await get_playergame_cache(roomid, player.playerid);
        if(player_data.hand=='Fold'){
            continue;
        }
        if (player_data.hand_result_type === maxRank) {
            playerid.push(player.playerid);
        }
    }
    let card_winner = [-1, -1, -1, -1, -1];
    let winnerid: number[] = [];
    for (const pid of playerid) {
        const player_data = await get_playergame_cache(roomid, pid);
        for (let i = 0; i < 5; i++) {
            if (player_data.values[i] > card_winner[i]) {
                card_winner = [...player_data.values]; // clone the array
                break;
            }
            if (player_data.values[i] < card_winner[i]) {
                break;
            }
        }
    }
    for (const pid of playerid) {
        const player_data = await get_playergame_cache(roomid, pid);
        const isWinner = player_data.values.every((val, idx) => val === card_winner[idx]);
        if (isWinner) {
            winnerid.push(pid);
        }
    }
    return winnerid;
};


