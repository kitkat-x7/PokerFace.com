import express,{Request,Response,NextFunction} from "express";
import { delete_notification, get_notification } from "../services/controller/notifications";
import { Databaseerror, Servererror } from "../middleware/error_handling";
const router=express.Router();
router.use(express.json());

router.get("/",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const verdict=await get_notification();
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
router.delete("/",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {id}=req.body;
        const verdict=await delete_notification(id);
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
