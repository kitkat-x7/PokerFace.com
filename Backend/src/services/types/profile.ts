export interface create_user_interface{
    email:string,
    password:string,
    name:string
}

export interface patch_user_interface{
    name:string,
    wins:number,
    matches:number
}