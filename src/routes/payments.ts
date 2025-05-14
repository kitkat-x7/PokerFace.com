import express,{NextFunction, Request,Response} from "express";
import { verification } from "../middleware/auth";
import { Databaseerror, error_handler, Servererror } from "../middleware/error_handling";
import { get_wallet } from "../services/controller/payments";
import { credit_balance, debit_balance} from "../services/controller/transaction";
import { create_notification } from "../services/controller/notifications";
const router=express.Router();
router.use(express.json());
router.use(verification);
router.use(error_handler);
router.get("/",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const id=req.id;
        const verdict=await get_wallet(id);
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

router.post("/credit",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const id=req.id;
        const {amount}=req.body;
        const verdict=await credit_balance({
            userid:id,
            balance:amount
        });
        await create_notification({
            type:'Credit',
            message:`Balance of ${amount} is credited at your account`,
            userid:id
        });
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

router.post("/debit",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const id=req.id;
        const {amount}=req.body;
        const verdict=await debit_balance({
            userid:id,
            balance:amount
        });
        await create_notification({
            type:'Debit',
            message:`Balance of ${amount} is debited from your account`,
            userid:id
        });
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

