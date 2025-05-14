import { prisma } from "../../config/prisma"
import { Prisma } from "../../generated/prisma";
import { Databaseerror } from "../../middleware/error_handling";
import { create_room_interface, patch_room_interface } from "../types/room"

export const create_room_db=async (data:create_room_interface)=>{
    try{
        const user=prisma.room.create({
            data:{
                creatorid:data.creatorid,
                start_time:data.start_time,
                status:'Not_Started',
                room_type:data.type
            }
        });
        return user;
    }catch(err){
        if(err instanceof Prisma.PrismaClientKnownRequestError){
            throw new Databaseerror(err.message,err,err.code);
        }else if(err instanceof Prisma.PrismaClientValidationError){
            throw new Databaseerror(err.message,err);
        } 
        else if(err instanceof Prisma.PrismaClientUnknownRequestError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientRustPanicError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientInitializationError){
            throw new Databaseerror(err.message,err);
        }
        else{
            throw new Databaseerror("Unknown Database Error",err);
        }
    }
}

export const patch_room_db=async (data:patch_room_interface)=>{
    try{
        if(data.status=='Live'){
            await prisma.room.update({
                where:{
                    id:data.roomid,
                    creatorid:data.creatorid
                },
                data:{
                    start_time:data.start_time,
                    status:'Live',
                    room_type:data.type
                }
            });
        }else if(data.status=='Completed'){
            await prisma.room.update({
                where:{
                    id:data.roomid,
                    creatorid:data.creatorid
                },
                data:{
                    start_time:data.start_time,
                    highest_bid:data.highest_bid,
                    status:'Completed',
                    room_type:data.type
                }
            });
        }else{
            await prisma.room.update({
                where:{
                    id:data.roomid,
                    creatorid:data.creatorid
                },
                data:{
                    start_time:data.start_time,
                    status:'Not_Started',
                    room_type:data.type
                }
            });
        }
        return;
    }catch(err){
        if(err instanceof Prisma.PrismaClientKnownRequestError){
            throw new Databaseerror(err.message,err,err.code);
        }else if(err instanceof Prisma.PrismaClientValidationError){
            throw new Databaseerror(err.message,err);
        } 
        else if(err instanceof Prisma.PrismaClientUnknownRequestError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientRustPanicError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientInitializationError){
            throw new Databaseerror(err.message,err);
        }
        else{
            throw new Databaseerror("Unknown Database Error",err);
        }
    }
}

export const delete_room_db=async (roomid:number,creatorid:number)=>{
    try{
        await prisma.room.delete({
            where:{
                id:roomid,
                creatorid
            }
        });
        return;
    }catch(err){
        if(err instanceof Prisma.PrismaClientKnownRequestError){
            throw new Databaseerror(err.message,err,err.code);
        }else if(err instanceof Prisma.PrismaClientValidationError){
            throw new Databaseerror(err.message,err);
        } 
        else if(err instanceof Prisma.PrismaClientUnknownRequestError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientRustPanicError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientInitializationError){
            throw new Databaseerror(err.message,err);
        }
        else{
            throw new Databaseerror("Unknown Database Error",err);
        }
    }
}

export const get_room_db=async (roomid:number,creatorid:number)=>{
    try{
        const room=await prisma.room.findUniqueOrThrow({
            where:{
                id:roomid,
                creatorid
                // for verifying the user we put up creatorid
            },
            select:{
                start_time:true,
                highest_bid:true,
                status:true,
                room_type:true
            }
        });
        return room;
    }catch(err){
        if(err instanceof Prisma.PrismaClientKnownRequestError){
            throw new Databaseerror(err.message,err,err.code);
        }else if(err instanceof Prisma.PrismaClientValidationError){
            throw new Databaseerror(err.message,err);
        } 
        else if(err instanceof Prisma.PrismaClientUnknownRequestError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientRustPanicError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientInitializationError){
            throw new Databaseerror(err.message,err);
        }
        else{
            throw new Databaseerror("Unknown Database Error",err);
        }
    }
}