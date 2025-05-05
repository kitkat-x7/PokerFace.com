// helpers like shuffling cards or evaluating hands
import { number } from "zod";
import { Servererror } from "../middleware/error_handling";
import { del_room_cache, get_room_cache, set_room_cache } from "../services/cache/game";
import { Card, Game_Room, Iteration_Card, Player_Join_Room, Room_Allocation, suit_type, suit_value, Suit_Value_Ws, Ws_map, Ws_Queue } from "./types";
import WebSocket from "ws";

// Game Logic


export const create_room_ws=async (data:Game_Room,playerid:number,client:WebSocket)=>{
    try{
        //Use Zod to Validate
        set_room_cache({
            roomid:data.roomid,
            minsum:data.minsum,
            smallblind:-1,
            bigblind:-1,
            dealer:-1,
            pointer:-1,
            turn:-1,
            playercount:1,
            status:'Not Started',
            creatorid:data.creatorid,
            starttime:data.starttime
        });
        let Queue:number[]=[];
        for(let i=0;i<=9;i++){
            Queue.push(-1);
        }
        Ws_Queue.set(data.roomid,Queue);
        Ws_map.set(playerid,[{
            playerid,
            socket:client
        }]);
        return{
            roomid:data.roomid
        };
    }catch(err){
        throw new Servererror("Server Error",500,err);
    }
}

export const update_room_ws=async (data:Game_Room,playerid:number)=>{
    try{
        //Use Zod to Validate
        const room=await get_room_cache(data.roomid);
        if(room.status!='Not Started'){
            throw new Servererror(`Cannot update the room`,500);
        }
        if(playerid!=data.creatorid){
            throw new Servererror(`Unauthorised Access`,401);
        }
        set_room_cache({
            roomid:data.roomid,
            minsum:data.minsum,
            smallblind:data.smallblind,
            bigblind:data.bigblind,
            dealer:data.dealer,
            pointer:data.pointer,
            turn:data.turn,
            playercount:data.playercount,
            status:data.status,
            creatorid:playerid,
            starttime:data.starttime
        });
        
        return `Room Updated`;
    }catch(err){
        throw new Servererror("Server Error",500,err);
    }
}

export const delete_room_ws=async (roomid:number)=>{
    try{
        del_room_cache(roomid);
        Ws_Queue.delete(roomid);
        return;
    }catch(err){
        throw new Servererror("Server Error",500,err);
    }
}

export const get_room_ws=async (roomid:number)=>{
    try{
        //Use Zod to Validate
        const room=await get_room_cache(roomid);
        return room;
    }catch(err){
        throw new Servererror("Server Error",500,err);
    }
}

export const Join_Room=async (data:Player_Join_Room,client:WebSocket)=>{
    try{
        //add player when the game is not live
        const room=await get_room_ws(data.roomid);
        let i=room.pointer;
        i=i%10;
        let Queue:number[]|undefined=[];
        Queue=Ws_Queue.get(data.roomid);
        let Room_Map:Room_Allocation[]|undefined=[];
        if(Ws_Queue.has(data.roomid) && Queue!=undefined){
            while(Queue[i]!=-1){
                i++;
                i=i%10;
            }
            Room_Map=Ws_map.get(data.roomid);
            if(Room_Map!=undefined){
                Room_Map.push({
                    playerid:data.playerid,
                    socket:client
                });
                Ws_map.set(data.playerid,Room_Map);
            }else{
                throw new Servererror("No Room Found",404);
            }
            Queue[i]=data.playerid;
            Ws_Queue.set(data.roomid,Queue);
            set_room_cache({
                roomid:data.roomid,
                minsum:room.minsum,
                smallblind:room.smallblind,
                bigblind:room.bigblind,
                dealer:room.dealer,
                pointer:i,
                turn:room.turn,
                playercount:room.playercount,
                status:room.status,
                starttime:room.starttime,
                creatorid:room.creatorid
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


export const generate=(start:number,Queue:number[])=>{
    while(Queue[start]===-1){
        start++;
        start=start%Queue.length;
    }
    return start
}


export const Flush=(suit:suit_type[],values:suit_value[])=>{
    let Flush=false;
    let Value=-1;
    let cards:number[]=[];
    ["Spade","Heart","Diamond","Club"].forEach((value,key)=>{
        if(suit.filter(data=>data===value).length>=5){
            Flush=true;
        }
    });
    let j=5;
    if (["A", "K", "Q", "J", "10"].every(v => values.includes(v as suit_value))) Value=14
    else if (["K", "Q", "J", "10", "9"].every(v => values.includes(v as suit_value))) Value = 13;
    else if (["Q", "J", "10", "9", "8"].every(v => values.includes(v as suit_value))) Value = 12;
    else if (["J", "10", "9", "8", "7"].every(v => values.includes(v as suit_value))) Value = 11;
    else if (["10", "9", "8", "7", "6"].every(v => values.includes(v as suit_value))) Value = 10;
    else if (["9", "8", "7", "6", "5"].every(v => values.includes(v as suit_value))) Value = 9;
    else if (["8", "7", "6", "5", "4"].every(v => values.includes(v as suit_value))) Value = 8;
    else if (["7", "6", "5", "4", "3"].every(v => values.includes(v as suit_value))) Value = 7;
    else if (["6", "5", "4", "3", "2"].every(v => values.includes(v as suit_value))) Value = 6;
    else if (["A", "2", "3", "4", "5"].every(v => values.includes(v as suit_value))) Value = 5;
    else Value=-1;
    
    if(Value!=-1){
        while(j--){
            cards.push(Value);
            Value--;
        }
    }
    if(Flush){
        if(Value!=-1){
            return {
                Flush:true,
                Straight:true,
                cards
            }
        }else{
            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                if((Suit_Value_Ws.get(value) as number)>0){
                    cards.push(Card.get(value) as number);
                    break;
                }
            }
            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0]){
                    cards.push(Card.get(value) as number);
                    break;
                }
            }
            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1]){
                    cards.push(Card.get(value) as number);
                    break;
                }
            }
            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2]){
                    cards.push(Card.get(value) as number);
                    break;
                }
            }
            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2] && (Card.get(value) as number)!=cards[3]){
                    cards.push(Card.get(value) as number);
                    break;
                }
            }
            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2] && (Card.get(value) as number)!=cards[3] && (Card.get(value) as number)!=cards[4]){
                    cards.push(Card.get(value) as number);
                    break;
                }
            }
            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2] && (Card.get(value) as number)!=cards[3] && (Card.get(value) as number)!=cards[4] && (Card.get(value) as number)!=cards[5]){
                    cards.push(Card.get(value) as number);
                    break;
                }
            }
            cards.sort((a, b) => b - a);
            return {
                Flush:true,
                Straight:false,
                cards
            }
        }
    }else{
        if(Value!=-1){
            return {
                Flush:false,
                Straight:true,
                cards
            }
        }else{
            return {
                Flush:false,
                Straight:false,
                cards
            }
        }
    }
}

export const Four_of_a_Kind=()=>{
    let cards:number[]=[];
    const values: suit_value[] = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
    values.forEach((value,key)=>{
       if(Suit_Value_Ws.get(value) as number==4){
            cards.push(Card.get(value) as number);
            cards.push(Card.get(value) as number);
            cards.push(Card.get(value) as number);
            cards.push(Card.get(value) as number);
            cards.push(-1);
        }
    });
    if(cards.length>0){
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if ((Suit_Value_Ws.get(value) as number) >0 && (Card.get(value) as number)>cards[4]) {
                cards[4]=(Card.get(value) as number);
                break;
            }
        }
    }
    if(cards.length>0){
        return{
            Four:true,
            cards
        }
    }else{
        return{
            Four:false,
            cards
        }
    }
}


export const FullorThree=()=>{
    let cards:number[]=[];
    const values: suit_value[] = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if((Suit_Value_Ws.get(value) as number)==3){
            cards.push(Card.get(value) as number);
            cards.push(Card.get(value) as number);
            cards.push(Card.get(value) as number);
            cards.push(-1);
            cards.push(-2);
            break;
        }
    }
    if(cards.length>0 && cards[0]==cards[1] && cards[1]==cards[2]){
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>=2 && (Suit_Value_Ws.get(value) as number)<=3 && (Card.get(value) as number)!=cards[0]){
                cards[3]=(Card.get(value) as number);
                cards[4]=(Card.get(value) as number);
                break;
            }
        }
    }
    if(cards.length>0 && cards[0]==cards[1] && cards[0]==cards[2] && cards[3]!=cards[4]){
        let D=-1,E=-1;
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0]){
                D = Card.get(value) as number;
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=D){
                E = Card.get(value) as number;
                break;
            }
        }
        if(D>=E){
            cards[3]=D;
            cards[4]=E;
        }else{
            cards[3]=E;
            cards[4]=D;
        }
    }
    if(cards[0]==cards[1] && cards[0]==cards[2] && cards[3]==cards[4]){
        return{
            Full:true,
            Three:false,
            cards
        }
    }else if(cards[0]==cards[1] && cards[0]==cards[2] && cards[3]!=cards[4]){
        return{
            Full:false,
            Three:true,
            cards
        }
    }
    else{
        return{
            Full:false,
            Three:false,
            cards
        }
    }
}

export const Pair=()=>{
    let cards:number[]=[-1,-2,-3,-4,-5];
    const values: suit_value[] = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if((Suit_Value_Ws.get(value) as number)==2){
            cards[0]=(Card.get(value) as number);
            cards[1]=(Card.get(value) as number);
            break;
        }
    }
    if(cards[0]==cards[1]){
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)==2 && (Card.get(value) as number)!=cards[0]){
                cards[2]=(Card.get(value) as number);
                cards[3]=(Card.get(value) as number);
                break;
            }
        }
    }

    if(cards[0]==cards[1] && cards[2]==cards[3]){
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[2]){
                cards[5] = Card.get(value) as number;
                break;
            }
        }
        return {
            Two_pair:true,
            One_pair:false,
            High:false,
            cards
        }
    }
    else if(cards[0]==cards[1] && cards[2]!=cards[3]){
        let cards2:number[]=[-1,-2,-3,-4,-5];
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1]){
                cards2[0]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2]){
                cards2[1]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2] && (Card.get(value) as number)!=cards[3]){
                cards2[2]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2] && (Card.get(value) as number)!=cards[3] && (Card.get(value) as number)!=cards[4]){
                cards2[3]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2] && (Card.get(value) as number)!=cards[3] && (Card.get(value) as number)!=cards[4] && (Card.get(value) as number)!=cards[5]){
                cards2[4]=(Card.get(value) as number);
                break;
            }
        }
        cards2.sort((a,b)=>b-a);
        cards[2]=cards2[0];
        cards[3]=cards2[1];
        cards[4]=cards2[2];
        return {
            Two_pair:false,
            One_pair:true,
            High:false,
            cards
        }
    }
    else{
        let cards2:number[]=[-1,-2,-3,-4,-5,-6,-7];
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0){
                cards2[0]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0]){
                cards2[1]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1]){
                cards2[2]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2]){
                cards2[3]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2] && (Card.get(value) as number)!=cards[3]){
                cards2[4]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2] && (Card.get(value) as number)!=cards[3] && (Card.get(value) as number)!=cards[4]){
                cards2[5]=(Card.get(value) as number);
                break;
            }
        }
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            if((Suit_Value_Ws.get(value) as number)>0 && (Card.get(value) as number)!=cards[0] && (Card.get(value) as number)!=cards[1] && (Card.get(value) as number)!=cards[2] && (Card.get(value) as number)!=cards[3] && (Card.get(value) as number)!=cards[4] && (Card.get(value) as number)!=cards[5]){
                cards2[6]=(Card.get(value) as number);
                break;
            }
        }
        cards.sort((a, b) => b - a);
        cards[0]=cards2[0];
        cards[1]=cards2[1];
        cards[2]=cards2[2];
        cards[3]=cards2[3];
        cards[4]=cards2[4];
        return {
            Two_pair:false,
            One_pair:false,
            High:true,
            cards
        }
    }
}
