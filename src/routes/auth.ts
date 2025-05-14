import express,{NextFunction, Request,Response} from "express";
import z, { ZodError } from "zod";
import { email_schema, name_schema, password_schema } from "../utils/zod";
import { Databaseerror, error_handler, Servererror } from "../middleware/error_handling";
import { signin, signup } from "../services/controller/auth";
const router=express.Router();
router.use(express.json());
router.use(error_handler);

router.post("/signup",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email,password,name}=req.body;
        email_schema.parse(email);
        password_schema.parse(password);
        name_schema.parse(name);
        const verdict=await signup({
            email,
            password,
            name
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
router.post("/signin",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email,password}=req.body;
        email_schema.parse(email);
        password_schema.parse(password);
        const verdict=await signin({
            email,
            password
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


export default router;