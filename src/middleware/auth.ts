import { Response,Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { secret_jwt } from "../services/controller/auth";
import { Servererror } from "./error_handling";


export {}
declare global {
    namespace Express {
      export interface Request {
        id:any
      }
    }
}

export const verification=(req:Request,res:Response,next:NextFunction):void=>{
    const token=req.header('token');
    const JWT_SECRET=process.env.JWT_SECRET;
    if(!token || !JWT_SECRET){
        next(new Servererror("Token or secret not found",400));
        return;
    }
    jwt.verify(token,secret_jwt,(err,data)=>{
        if(err){
            next(new Servererror("Unauthorised access",401,err));
            return;
        }else{
            req.id=data;
            return next();
        }
    });
}