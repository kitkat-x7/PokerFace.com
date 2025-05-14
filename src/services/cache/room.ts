import NodeCache from "node-cache";
import { Room } from "../../game/types";
const myCache=new NodeCache();

export const create_roomdetails_cache=async (room_data:Room)=>{
    const key=`Room${room_data.roomid}`;
    myCache.set(key,room_data);
}

export const get_roomdetails_cache=async (roomid:number)=>{
    const key=`Room${roomid}`;
    myCache.get(key);
}

export const delete_roomdetails_cache=async (roomid:number)=>{
    const key=`Room${roomid}`;
    myCache.del(key);
}