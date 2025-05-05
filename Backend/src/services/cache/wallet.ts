import NodeCache from "node-cache";
import { create_wallet_interface } from "../types/wallet";
const myCache=new NodeCache();

export const get_wallet_cache=async (userid:number)=>{
    const key=`Wallet${userid}`;
    const value=await myCache.get(key) as create_wallet_interface;
    return value;
}

export const set_wallet_cache=async (data:create_wallet_interface)=>{
    const key=`Wallet${data.userid}`;
    myCache.set(key,data.balance);
}

export const del_wallet_cache=async (userid:number)=>{
    const key=`Wallet${userid}`;
    myCache.del(key);
}