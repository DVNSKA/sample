import mongoose from "mongoose";

const connect =async ()=>{
    try{
     await   mongoose.connect(process.env.MONGOO_URI);
        console.log("connected successfully");
    }catch(error){
        console.log(error);
    }
};
export default connect;
