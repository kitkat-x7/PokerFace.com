import { Databaseerror, Servererror } from "../../middleware/error_handling";
import { create_notification_db, delete_notification_db, get_notification_db } from "../database/notification"
import { create_notification_interface } from "../types/notification";

export const get_notification=async ()=>{
    try{
        const notification=await get_notification_db();
        return {
            code:200,
            message:{
                notification
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

export const create_notification=async (data:create_notification_interface)=>{
    try{
        await create_notification_db({
            userid:data.userid,
            type:data.type,
            message:data.message
        });
        return {
            code:201,
            message:{
                message:"Notification created"
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
export const delete_notification=async (id:number|null)=>{
    try{
        await delete_notification_db(id);
        return {
            code:201,
            message:{
                message:"Notification Deleted"
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