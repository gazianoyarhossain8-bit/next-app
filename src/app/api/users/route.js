import { ConnectDB } from "@/lib/db";
import User from "@/models/User";
 export async function GET(){
    await ConnectDB();

    const users = await User.find()
    return Response.json(users)
 }