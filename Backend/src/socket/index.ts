import { WebSocketServer,WebSocket } from "ws";
import { Request } from "express";
import { httpServer } from "../server";
import { Bet_types, Player_Join_Room, Ws_map, Ws_Queue } from "../game/types";
import { verification } from "./verify";
import { Servererror } from "../middleware/error_handling";
import { Join_Room, Leave_Room} from "./room";
import { status_player, Timer } from "./util";
import { All_in, Call, Check, close_timer, Fold, hand, Raise } from "../game/engine";
import { client_message_schema } from "../utils/zod";
import { get_gamedetails_cache, get_room_cache } from "../services/cache/game";
import { error } from "console";

const wss=new WebSocketServer({
    server:httpServer
});

wss.on('connection',(socket:WebSocket,req:Request)=>{
    socket.send("Hello!, Welcome to the Poker World");
    
    const token=req.header('token');
    if(token==undefined || !token){
        throw new Servererror("No Token Found",404);
    }
    const playerid=verification(token);
    socket.on('message',async (data)=>{
        if(typeof(data)=='string'){
            const Data=JSON.parse(data);
            client_message_schema.parse(Data);
            if(Data.type=='join'){
                //Room Status
                const info=Data.payload as Player_Join_Room;
                await Join_Room({
                    roomid:info.roomid,
                    amount:info.amount,
                    playerid
                },playerid,socket);
                Ws_map.get(info.roomid)?.forEach((value,key)=>{
                    value.socket.send(`Player ${playerid} has joined the room.`)
                });
                const status=await status_player(info.roomid,playerid);
                if(status=='Player'){
                    Timer(info.roomid).then(()=>{
                        socket.send(`Room ${info.roomid} is Live`);
                    });
                }
            }
            if(Data.type=='Hand'){
                const payload=Data.payload as Bet_types;
                const status=await get_room_cache(payload.roomid);
                const Queue=Ws_Queue.get(payload.roomid) as number[];
                if(Queue[status.turn]!=payload.playerid){
                    socket.send(`It's not your turn.`);
                }else{
                    close_timer(payload.roomid);
                    hand(payload.roomid,payload.playerid,payload.amount,false);
                }
            }
            if(Data.type=='Fold'){
                const payload=Data.payload as Bet_types;
                const status=await get_room_cache(payload.roomid);
                const Queue=Ws_Queue.get(payload.roomid) as number[];
                if(Queue[status.turn]!=payload.playerid){
                    socket.send(`It's not your turn.`);
                }else{
                    close_timer(payload.roomid);
                    hand(payload.roomid,payload.playerid,payload.amount,true);
                }
            }
        }
    });
    socket.on('error',(error)=>{

    });

    socket.on('close',(code,reason)=>{
        console.log(code);
        console.log(reason);
        const brodcast_data=Leave_Room(playerid);
        brodcast_data.forEach((value,key)=>{
            value.send(`Player ${key} has left the room.`);
        });
    })
});
wss.close(()=>{
    console.log("Server has been closed.")
});