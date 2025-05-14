import { Signin_data, Signup_data } from "../types/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { get_user_details, post_user_details } from "../database/profile";
import dotenv from 'dotenv'; 
import { Databaseerror, Servererror } from "../../middleware/error_handling";
import { create_notification } from "./notifications";
import { create_wallet } from "./payments";
dotenv.config(); 

export const signup=async (data:Signup_data)=>{
    try{
        const user=await get_user_details(data.email);
        if(user){
            throw new Servererror(`User with ${data.email} already exists.`,409);
        }
        const password_hassed=await bcrypt.hash(data.password,10);
        const details=await post_user_details({
            email:data.email,
            password:password_hassed,
            name:data.name
        });
        await create_wallet(details.id)
        return {
            code:201,
            message:{
                email:data.email,
                password:data.password,
                name:data.name
            }
        }
    }catch(err){
        if(err instanceof Databaseerror){
            throw new Databaseerror(err.message,err,err.code);
        }else{
            console.error("Service layer error:",err);
            throw new Servererror(`Server Error`,500,err);
        }
    }
};

export const signin=async (data:Signin_data)=>{
    try{
        const user=await get_user_details(data.email);
        if(!user){
            throw new Servererror(`User with ${data.email} doesn't exist.`,404);
        }
        const password=await bcrypt.compare(data.password,user.password);
        if(password){
            const JWT_SECRET=process.env.JWT_SECRET as string;
            const token=jwt.sign({id:user.id},JWT_SECRET,{
                expiresIn:"24h"
            });
            return {
                code:201,
                message:{
                    token
                }
            }
        }else{
            throw new Servererror(`Invalid Password.`,403);
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
};
export const secret_jwt=():string=>{
    const secret=process.env.JWT_SECRET;
    if(secret){
        return secret;
    }else{
        return `Not available`;
    }
}