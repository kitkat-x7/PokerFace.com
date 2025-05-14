import express,{ Request,Response,NextFunction, response } from "express";
import z, { ZodError } from "zod";
import { verification } from "../middleware/auth";
import { Databaseerror, error_handler, Servererror } from "../middleware/error_handling";
import { create_room, delete_room, patch_room } from "../services/controller/room";
import { create_room_ws, delete_room_ws, get_room_ws, update_room_ws } from "../game/utils";
const router=express.Router();
router.use(express.json());
router.use(verification);
router.use(error_handler);

router.post("/",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const id=req.id;
        const {status,type,start_time,minsum}=req.body;
        const verdict=await create_room({
            creatorid:id,
            status,
            type,
            start_time
        });
        create_room_ws({
            roomid:verdict.message.room.id,
            minsum,
            smallblind:0,
            bigblind:0,
            dealer:0,
            pointer:0,
            turn:0,
            
        });
        const room={
            creatorid:id,
            status,
            type,
            start_time,
            roomid:verdict.message.room.id,
            minsum,
            smallblind:-1,
            bigblind:-1,
            dealer:-1,
            pointer:-1
        }
        res.status(verdict.code).json(room);
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
        const id=req.id;
        const {roomid,status,type,start_time,minsum}=req.body;
        //Have to work on Data.startime=null
        //Update only if the room hasn't started yet
        const verdict=await patch_room({
            creatorid:id,
            roomid,
            status,
            type,
            start_time
        });
        if(status=='Not Started'){
            const roomdata=await get_room_ws(roomid);
            update_room_ws({
                roomid,
                minsum,
                smallblind:roomdata.smallblind,
                bigblind:roomdata.bigblind,
                dealer:roomdata.dealer,
                pointer:roomdata.pointer,
                turn:roomdata.turn
            });
        }
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


router.delete("/:roomid",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const id=req.id;
        const roomid=Number(req.params.roomid);
        const verdict=await delete_room(roomid,id);
        delete_room_ws(roomid);
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


router.get("/",(req:Request,res:Response,next:NextFunction)=>{
    //get using node cache
});