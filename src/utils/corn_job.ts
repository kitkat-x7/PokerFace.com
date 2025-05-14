import cron from 'node-cron';
import { delete_notification } from '../services/controller/notifications';

export const Scheduled_Clean_Notification=()=>{
    try{
        cron.schedule("0 0 * * *", async () => {
            delete_notification(null);
        });
    }catch(err){
        console.log(err);
    }
}