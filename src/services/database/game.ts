import { prisma } from "../../config/prisma";
import { Prisma } from "../../generated/prisma";
import { Databaseerror } from "../../middleware/error_handling";
import { game_details_interface } from "../types/game";

export const create_game_db=async (data:game_details_interface[])=>{
    try{
        await prisma.details.createMany({
            data:data.map(({ roomid, playerid,time,move,action,bet}) => ({
                roomid,
                playerid,
                time,
                move,
                action,
                bet
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

export const get_game_db=async (roomid:number)=>{
    try{
        const data=await prisma.details.findMany({
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