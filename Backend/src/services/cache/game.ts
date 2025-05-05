import NodeCache from "node-cache";
import { Game_Details, Game_Room, Player_Game_Details } from "../../game/types";
const myCache=new NodeCache();

export const get_room_cache=async (roomid:number)=>{
    const key=`Room${roomid}`;
    const value=await myCache.get(key) as Game_Room;
    return value;
};

export const get_playergame_cache=async (roomid:number,playerid:number)=>{
    const key=`Player${roomid}${playerid}`;
    const value=await myCache.get(key) as Player_Game_Details;
    return value;
};

export const get_gamedetails_cache=async (roomid:number)=>{
    const key=`Details${roomid}`;
    const value=await myCache.get(key) as Game_Details;
    return value;
};

export const get_player_wallet=async (playerid:number)=>{
    const key=`Wallet${playerid}`;
    const value=await myCache.get(key) as number;
    return value;
};

export const set_room_cache=(data:Game_Room)=>{
    const key=`Room${data.roomid}`;
    myCache.set(key,{
        roomid:data.roomid,
        minsum:data.minsum,
        smallblind:data.smallblind,
        bigblind:data.bigblind,
        dealer:data.dealer,
        pointer:data.pointer,
        turn:data.turn
    }); 
};

export const set_playergame_cache=(data:Player_Game_Details)=>{
    const key=`Player${data.roomid}${data.playerid}`;
    myCache.set(key,{
        roomid:data.roomid,
        playerid:data.playerid,
        hole_cards:data.hole_cards,
        bet_amount:data.bet_amount,
        status:data.status,
        hand:data.hand,
        hand_result_type:data.hand_result_type,
        values:data.values
    });
};

export const set_gamedetails_cache=(data:Game_Details)=>{
    const key=`Details${data.roomid}`;
    myCache.set(key,{
        roomid:data.roomid,
        stage:data.stage,
        cards:data.cards,
        amount:data.amount,
        index:data.index,
        chip:data.chip,
        player_turn:data.player_turn
    });
};


export const set_player_wallet=async (playerid:number,amount:number)=>{
    const key=`Wallet${playerid}`;
    const value=myCache.set(key,amount);
    return value;
};


export const del_room_cache=(roomid:number)=>{
    const key=`Room${roomid}`;
    myCache.del(key);
    return;
};

export const del_playergame_cache=(roomid:number,playerid:number)=>{
    const key=`Player${roomid}${playerid}`;
    myCache.del(key);
    return;
};

export const del_gamedetails_cache=(roomid:number)=>{
    const key=`Details${roomid}`;
    myCache.del(key);
    return;
};

export const del_player_wallet=async (playerid:number)=>{
    const key=`Wallet${playerid}`;
    myCache.del(key);
    return;
};