import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
    tittle:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const postMessage = mongoose.model("PostsMessage",postsSchema);

export default postMessage;