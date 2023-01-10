import mongoose from "mongoose";
mongoose.set('strictQuery', true)

const ConnectDB = (url) =>{
    return mongoose.connect(url)
} 

export default ConnectDB