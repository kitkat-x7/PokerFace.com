import z, { string } from "zod";

export const email_schema=z.string({
    message:"email not a string.",
}).min(3,{
    message: "email must be at least 3 char long."
}).email({ message: "Must be an email."});

export const password_schema=z.string({
    message:"password not a string.",
}).min(3,{
    message: "password must be at least 3 char long."
}).max(100,{
    message: "password must be at least 3 char longs"
}).regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/, {
    message: "Password must contain at least one uppercase letter, one number, and one special character."
});

export const name_schema=z.string({
    message:"name should be a string"
}).min(9,{
    message: "name must be at least 9 char longs"
}).max(100,{
    message: "name must be at atmost 100 char longs"
});



export const client_message_schema=z.object({
    type:z.enum(["Join","Fold","Check","Call","Raise","All In"]),
    payload:z.object({
        amount:z.number({
            required_error:"Amount is required",
            invalid_type_error:"Amount must be a number"
        }),
        roomid:z.number({
            required_error:"Roomid is required",
            invalid_type_error:"Roomid must be a number"
        }),
        playerid:z.number({
            required_error:"Playerid is required",
            invalid_type_error:"Playerid must be a number"
        })
    })
})