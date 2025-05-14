export interface create_room_interface{
    creatorid:number,
    status:room_status,
    type:room_type,
    start_time?:Date
}

export interface patch_room_interface{
    creatorid:number,
    roomid:number,
    status:room_status,
    type:room_type,
    start_time?:Date
    highest_bid?:number
}

type room_type= "Private" | "Public";
type room_status= 
    "Not_Started" |
    "Live" |
    "Completed";