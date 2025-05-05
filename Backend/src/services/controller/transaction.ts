import { Databaseerror, Servererror } from "../../middleware/error_handling";
import { transaction_wallet_db } from "../database/transaction";
import { create_wallet_db, get_wallet_db } from "../database/wallet";
import { wallet_transaction_interface } from "../types/transaction";

export const credit_balance=async (data:wallet_transaction_interface)=>{
    try{
        //use transactions
        const balance=await get_wallet_db(data.userid);
        let credit=balance.balance+data.balance;
        const user=await transaction_wallet_db({
            userid:data.userid,
            balance:credit
        });
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

export const debit_balance=async (data:wallet_transaction_interface)=>{
    try{
        //use transactions
        const balance=await get_wallet_db(data.userid);
        if(data.balance<=balance.balance){
            const debit=balance.balance-data.balance;
            await transaction_wallet_db({
                userid:data.userid,
                balance:debit
            });
            return {
                code:200,
                message:{
                    message:`Sum of ${data.balance} has been debited from your account.`
                }
            }
        }else{
            throw new Servererror("Insufficient Balance",403);
        }
    }catch(err){
        if(err instanceof Databaseerror){
            throw new Databaseerror(err.message,err,err.code);
        }else if(err instanceof Servererror){
            throw new Servererror(`Server Error`,err.status,err);
        }else{
            throw new Servererror(`Server Error`,500,err);
        }
    }
}

