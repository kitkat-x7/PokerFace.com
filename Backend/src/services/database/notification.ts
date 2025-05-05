import { cutoffdate} from "../../config/cutoffdate";
import { prisma } from "../../config/prisma"
import { Prisma } from "../../generated/prisma";
import { Databaseerror } from "../../middleware/error_handling";
import { create_notification_interface } from "../types/notification";

export const get_notification_db=async ()=>{
    try{
        const data=await prisma.notification.findMany();
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

export const create_notification_db=async(data:create_notification_interface)=>{
    try{
        if(data.type=='Credit'){
            await prisma.notification.create({
                data:{
                    userid:data.userid,
                    message:data.message,
                    type:'Credit'
                }
            });
        }else if(data.type=='Debit'){
            await prisma.notification.create({
                data:{
                    userid:data.userid,
                    message:data.message,
                    type:'Debit'
                }
            });
        }else if(data.type=='Invite'){
            await prisma.notification.create({
                data:{
                    userid:data.userid,
                    message:data.message,
                    type:'Invite'
                }
            });
        }else{
            await prisma.notification.create({
                data:{
                    userid:data.userid,
                    message:data.message,
                    type:'General'
                }
            });
        }
        return 
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

export const delete_notification_db=async (id:number|null)=>{
    try{
        if(id){
            await prisma.notification.delete({
                where:{
                    id
                }
            });
        }else{
            await prisma.notification.deleteMany({
                where:{
                    time:{
                        lt:cutoffdate
                    }
                }
            });
            return;
        }
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