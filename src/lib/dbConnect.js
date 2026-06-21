import mongoose from "mongoose";

let isConnected = false;

 async function dbConnect() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URl);
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
}
export { dbConnect };