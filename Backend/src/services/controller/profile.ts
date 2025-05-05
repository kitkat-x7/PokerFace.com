import { Databaseerror, Servererror } from "../../middleware/error_handling";
import { get_user_details, patch_user_details } from "../database/profile"
import { patch_user_interface } from "../types/profile";

export const get_profile=async (data:number)=>{
    try{
        const user=await get_user_details(data);
        return {
            code:200,
            message:{
                user
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

export const update_profile=async (id:number,data:patch_user_interface)=>{
    try{
        const user=await patch_user_details(id,data);
        return {
            code:201,
            message:{
                user
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

export const delete_profile=async (id:number)=>{
    try{
        await delete_profile(id);
        return {
            code:201,
            message:`User Deleted.`
        }
    }catch(err){
        if(err instanceof Databaseerror){
            throw new Databaseerror(err.message,err,err.code)
        }else{
            throw new Servererror("Server Error",500,err);
        }
    }
}