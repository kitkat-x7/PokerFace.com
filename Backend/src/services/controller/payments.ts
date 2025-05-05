import { Databaseerror, Servererror } from "../../middleware/error_handling";
import { create_wallet_db, get_wallet_db } from "../database/wallet";

export const get_wallet=async (id:number)=>{
    try{
        const user=await get_wallet_db(id);
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

export const create_wallet=async (id:number)=>{
    try{
        await create_wallet_db(id);
        return {
            code:201,
            message:{
                message:"Wallet Created"
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

