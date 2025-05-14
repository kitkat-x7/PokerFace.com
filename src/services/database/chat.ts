import { prisma } from "../../config/prisma";
import { Prisma } from "../../generated/prisma";
import { Databaseerror } from "../../middleware/error_handling";
import { room_chat_interface } from "../types/chat";

export const create_chat_db=async (data:room_chat_interface[])=>{
    try{
        await prisma.chat.createMany({
            data: data.map(({ roomid, playerid, time, message }) => ({
              roomid,
              playerid,
              time,
              message,
            })),
        });
        return;
    }catch(err){
        if(err instanceof Prisma.PrismaClientKnownRequestError){
            throw new Databaseerror(err.message,err,err.code);
        }else if(err instanceof Prisma.PrismaClientValidationError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientUnknownRequestError){
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

export const get_chat_db=async (roomid:number)=>{
    try{
        const data=await prisma.chat.findMany({
            where:{
                roomid
            }
        });
        return data;
    }catch(err){
        if(err instanceof Prisma.PrismaClientKnownRequestError){
            throw new Databaseerror(err.message,err,err.code);
        }else if(err instanceof Prisma.PrismaClientValidationError){
            throw new Databaseerror(err.message,err);
        }else if(err instanceof Prisma.PrismaClientUnknownRequestError){
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