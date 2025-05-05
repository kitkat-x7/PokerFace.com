import WebSocket from "ws";
import { Player_Join_Room, Room_Allocation, Ws_map, Ws_Queue } from "../game/types";
import { get_room_ws } from "../game/utils";
import { Servererror } from "../middleware/error_handling";
import { get_playergame_cache, get_room_cache, set_playergame_cache, set_room_cache } from "../services/cache/game";



export const Join_Room=async (data:Player_Join_Room,playerid:number,client:WebSocket)=>{
    try{
        //add player when the game is not live
        const room=await get_room_ws(data.roomid);
        if(room.status=='Live'){
            set_playergame_cache({
                roomid:data.roomid,
                playerid:playerid,
                hole_cards:[],
                bet_amount:data.amount,
                status:'Spectetor'
            });
        }else{
            set_playergame_cache({
                roomid:data.roomid,
                playerid:playerid,
                hole_cards:[],
                bet_amount:data.amount,
                status:'Player'
            });
        }
        let i=room.pointer;
        if(i==10){
            i=0;
        }else{
            i++;
        }
        let Queue:number[]|undefined=[];
        Queue=Ws_Queue.get(data.roomid);
        let Room_Map:Room_Allocation[]|undefined=[];
        if(Ws_Queue.has(data.roomid) && Queue!=undefined){
            while(Queue[i]!=-1){
                if(i==9){
                    i=0;
                }else{
                    i++;
                }
            }
            Room_Map=Ws_map.get(data.roomid);
            if(Room_Map!=undefined){
                Room_Map.push({
                    playerid,
                    socket:client
                });
                Ws_map.set(playerid,Room_Map);
            }else{
                throw new Servererror("No Room Found",404);
            }
            Queue[i]=playerid;
            Ws_Queue.set(data.roomid,Queue);
            room.pointer=i;
            set_room_cache({
                roomid:data.roomid,
                minsum:room.minsum,
                smallblind:room.smallblind,
                bigblind:room.bigblind,
                dealer:room.dealer,
                pointer:room.pointer,
                turn:room.turn,
                playercount:room.playercount,
                status:room.status,
                creatorid:room.creatorid,
                starttime:room.starttime
            });
        }else{
            throw new Servererror("No Room Found",404);
        }
    }catch(err){
        if(err instanceof Servererror){
            throw new Servererror(err.message,err.status,err);
        }else{
            throw new Servererror("Server Error",500,err);
        }
    }
};

export const Leave_Room=(playerid:number) => {
    try{
        //timer
        const brodcast_data=new Map<number,WebSocket>();
        Ws_Queue.forEach((value,key)=>{
            const index=value.indexOf(playerid);
            if(index!=-1){
                Ws_map.get(key)?.forEach((value1)=>{
                    if(value1.playerid!=playerid){
                        brodcast_data.set(value1.playerid,value1.socket);
                    }
                })
                value[index]=-1;
                Ws_Queue.set(key,value);
            }
        });
        return brodcast_data;
    }catch(err){
        throw new Servererror("Server Error",500,err);
    }
}


export const halttime=(time:number,client:WebSocket,roomid:number,playerid:number)=>{
    return new Promise<void>((resolve) => {
        setTimeout(async () => {
            const player_data=await get_playergame_cache(roomid,playerid);
            const room_data=await get_room_cache(roomid);
            set_playergame_cache({
                playerid:player_data.playerid,
                roomid:player_data.roomid,
                hole_cards:[],
                status:'Player', 
                bet_amount:player_data.bet_amount,
                hand
            });
            //revolve sb bb dealer
            set_room_cache({
                roomid:room_data.roomid,
                minsum:room_data.minsum,
                smallblind:room_data.smallblind,
                bigblind:room_data.bigblind,
                dealer:room_data.dealer,
                pointer:room_data.pointer,
                turn:room_data.turn,
                playercount:room_data.playercount,
                status:'Live',
                creatorid:room_data.creatorid,
                starttime:room_data.starttime
            })
            client.send(`Room is Live.`)
            resolve();
        }, time);
    });
}