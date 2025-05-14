import NodeCache from "node-cache";
import { Game_Details, Game_Room, Player_Game_Details } from "../../game/types";
const myCache=new NodeCache();

export const get_room_cache=async (roomid:number)=>{
    const key=`RoomDetails${roomid}`;
    const value=await myCache.get(key) as Game_Room;
    return value;
};

export const get_playergame_cache=async (roomid:number,playerid:number)=>{
    const key=`Player${roomid}${playerid}`;
    const value=await myCache.get(key) as Player_Game_Details;
    return value;
};

export const get_gamedetails_cache=async (roomid:number)=>{
    const key=`GameDetails${roomid}`;
    const value=await myCache.get(key) as Game_Details;
    return value;
};

export const get_player_wallet=async (playerid:number)=>{
    const key=`Wallet${playerid}`;
    const value=await myCache.get(key) as number;
    return value;
};

export const set_room_cache=(data:Game_Room)=>{
    const key=`RoomDetails${data.roomid}`;
    myCache.set(key,data); 
};

export const set_playergame_cache=(data:Player_Game_Details)=>{
    const key=`Player${data.roomid}${data.playerid}`;
    myCache.set(key,data);
};

export const set_gamedetails_cache=(data:Game_Details)=>{
    const key=`Details${data.roomid}`;
    myCache.set(key,data);
};


export const set_player_wallet=async (playerid:number,amount:number)=>{
    const key=`Wallet${playerid}`;
    const value=myCache.set(key,amount);
    return value;
};


export const del_room_cache=(roomid:number)=>{
    const key=`RoomDetails${roomid}`;
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