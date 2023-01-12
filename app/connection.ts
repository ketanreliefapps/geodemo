import mongoose, { ConnectOptions } from "mongoose";

export const connection = async ()=>{
    const url = `mongodb://localhost:27017/geo?authMechanism=DEFAULT`;
    await mongoose.connect(url,   { useNewUrlParser: true } as ConnectOptions);
    console.log("database connected....")
}