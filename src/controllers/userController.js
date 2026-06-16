import User from ".@/models/User";

export async function getUsers(){
    return await User.find()
}