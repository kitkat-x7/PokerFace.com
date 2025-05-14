import { get_room_ws } from "../game/utils";
import { get_playergame_cache } from "../services/cache/game";

export const Timer=async (roomid:number)=>{
    const room=await get_room_ws(roomid);
    return new Promise<void>((resolve) => {
        let timer_data=new Date(room.starttime).getTime()-Date.now();
        if(timer_data<0){
            timer_data=0;
        }
        setTimeout(() => {
            resolve();
        }, timer_data);
    });
}

export const time_room=async (roomid:number)=>{
    const room=await get_room_ws(roomid);
    let timer_data=new Date(room.starttime).getTime()-Date.now();
    return timer_data;
}

export const status_room=async (roomid:number)=>{
    const room=await get_room_ws(roomid);
    return room.status;
}
export const status_player=async (roomid:number,playerid:number)=>{
    const room=await get_playergame_cache(roomid,playerid);
    return room.status;
}