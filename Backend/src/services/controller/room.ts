import { Databaseerror, Servererror } from "../../middleware/error_handling";
import { create_room_db, delete_room_db, get_room_db, patch_room_db } from "../database/room";
import { create_room_interface, patch_room_interface } from "../types/room"

export const create_room=async (data:create_room_interface)=>{
    try{
        if(data.start_time){
            const elapsed=Date.now()-data.start_time.getTime();
            if(elapsed>=0){
                if(data.type=='Private'){
                    const room=await create_room_db({
                        creatorid:data.creatorid,
                        status:'Live',
                        type:'Private',
                        start_time:data.start_time
                    });
                    return {
                        code:200,
                        message:{
                            room
                        }
                    }
                }else{
                    const room=await create_room_db({
                        creatorid:data.creatorid,
                        status:'Live',
                        type:'Public',
                        start_time:data.start_time
                    });
                    return {
                        code:200,
                        message:{
                            room
                        }
                    }
                }
            }else{
                if(data.type=='Private'){
                    const room=await create_room_db({
                        creatorid:data.creatorid,
                        status:'Live',
                        type:'Private',
                        start_time:data.start_time
                    });
                    return {
                        code:200,
                        message:{
                            room
                        }
                    }
                }else{
                    const room=await create_room_db({
                        creatorid:data.creatorid,
                        status:'Live',
                        type:'Public',
                        start_time:data.start_time
                    });
                    return {
                        code:200,
                        message:{
                            room
                        }
                    }
                }
            }
        }else{
            if(data.type=='Private'){
                const room=await create_room_db({
                    creatorid:data.creatorid,
                    status:'Live',
                    type:'Private',
                    start_time:data.start_time
                });
                return {
                    code:200,
                    message:{
                        room
                    }
                }
            }else{
                const room=await create_room_db({
                    creatorid:data.creatorid,
                    status:'Live',
                    type:'Public',
                    start_time:data.start_time
                });
                return {
                    code:200,
                    message:{
                        room
                    }
                }
            }
        }
    }catch(err){
        if(err instanceof Databaseerror){
            throw new Databaseerror(err.message,err,err.code)
        }else{
            throw new Servererror("Server Error",500,err);
        }
    }
}

export const patch_room=async (data:patch_room_interface)=>{
    try{
        if(data.start_time){
            const elapsed=Date.now()-data.start_time.getTime();
            if(elapsed>0){
                if(data.status=='Live'){
                    if(data.type=='Private'){
                        await patch_room_db({
                            creatorid:data.creatorid,
                            roomid:data.roomid,
                            status:'Live',
                            start_time:data.start_time,
                            type:'Private'
                        });
                        return {
                            code:201,
                            message:{
                                message:`Room Updated`
                            }
                        }
                    }else{
                        await patch_room_db({
                            creatorid:data.creatorid,
                            roomid:data.roomid,
                            status:'Live',
                            start_time:data.start_time,
                            type:'Public'
                        });
                        return {
                            code:201,
                            message:{
                                message:`Room Updated`
                            }
                        }
                    }
                }else{
                    if(data.type=='Private'){
                        await patch_room_db({
                            creatorid:data.creatorid,
                            roomid:data.roomid,
                            status:'Completed',
                            start_time:data.start_time,
                            type:'Private'
                        });
                        return {
                            code:201,
                            message:{
                                message:`Room Updated`
                            }
                        }
                    }else{
                        await patch_room_db({
                            creatorid:data.creatorid,
                            roomid:data.roomid,
                            status:'Completed',
                            start_time:data.start_time,
                            type:'Public'
                        });
                        return {
                            code:201,
                            message:{
                                message:`Room Updated`
                            }
                        }
                    }
                }  
            }
        }else{
            if(data.type=='Private'){
                await patch_room_db({
                    creatorid:data.creatorid,
                    roomid:data.roomid,
                    status:data.status,
                    type:'Private'
                });
                return {
                    code:201,
                    message:{
                        message:`Room Updated`
                    }
                }
            }else{
                await patch_room_db({
                    creatorid:data.creatorid,
                    roomid:data.roomid,
                    status:data.status,
                    type:'Public'
                });
                return {
                    code:201,
                    message:{
                        message:`Room Updated`
                    }
                }
            }
        }
        return {
            code:201,
            message:{
                message:`Room Updated`
            }
        }
    }catch(err){
        if(err instanceof Databaseerror){
            throw new Databaseerror(err.message,err,err.code)
        }else{
            throw new Servererror("Server Error",500,err);
        }
    }
}

export const delete_room=async (roomid:number,creatorid:number)=>{
    try{
        await delete_room_db(roomid,creatorid);
        return {
            code:201,
            message:`Room Deleted.`
        }
    }catch(err){
        if(err instanceof Databaseerror){
            throw new Databaseerror(err.message,err,err.code)
        }else{
            throw new Servererror("Server Error",500,err);
        }
    }
}

export const get_room=async (roomid:number,creatorid:number)=>{
    try{
        const room=await get_room_db(roomid,creatorid);
        return room;
    }catch(err){
        if(err instanceof Databaseerror){
            throw new Databaseerror(err.message,err,err.code)
        }else{
            throw new Servererror("Server Error",500,err);
        }
    }
}

