import express,{NextFunction, Request,Response} from "express";
import z, { ZodError } from "zod";
import { verification } from "../middleware/auth";
import { Databaseerror, error_handler, Servererror } from "../middleware/error_handling";
import { delete_profile, get_profile, update_profile } from "../services/controller/profile";
import { name_schema } from "../utils/zod";
const router=express.Router();
router.use(express.json());
router.use(verification);
router.use(error_handler);
router.get("/",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const id=req.id;
        const verdict=await get_profile(id);
        res.status(verdict.code).json(verdict.message);
    }catch(err){
        if(err instanceof Databaseerror){
            return next(new Databaseerror(err.message,err,err.code));
        }else if(err instanceof Servererror){
            return next(new Servererror(err.message,err.status,err));
        }else{
            return next(new Servererror("Server Error",500,err));
        }
    }
});
router.patch("/",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {name}=req.body;
        name_schema.parse(name);
        const id=req.id;
        const data=await get_profile(id);
        const verdict=await update_profile(id,{
            name,
            wins:data.message.user.wins,
            matches:data.message.user.matches
        });
        res.status(verdict.code).json(verdict.message);
    }catch(err){
        if(err instanceof Databaseerror){
            return next(new Databaseerror(err.message,err,err.code));
        }else if(err instanceof Servererror){
            return next(new Servererror(err.message,err.status,err));
        }else if(err instanceof ZodError){
            return next(new Servererror(err.message,403,err));
        }else{
            return next(new Servererror("Server Error",500,err));
        }
    }
});
router.delete("/",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const id=req.id;
        const verdict=await delete_profile(id);
        res.status(verdict.code).json(verdict.message);
    }catch(err){
        if(err instanceof Databaseerror){
            return next(new Databaseerror(err.message,err,err.code));
        }else if(err instanceof Servererror){
            return next(new Servererror(err.message,err.status,err));
        }else{
            return next(new Servererror("Server Error",500,err));
        }
    }
});

router.get("/signout",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"User Logged Out!",
    });
    return;
});

export default router;