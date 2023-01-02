import postMessage from "../models/postsMessage.js";
export async function  getPosts(req,res){
    try {
        const postMessages = await postMessage.find();
        res.status(200).json({postMessages});
    } catch (error) {
        
        res.status(403).json({message:"md afroz alam"});
        console.log(res);
    }
}

export async function createPost (req,res){
    const post = req.body;

    const newPost = new postMessage(post);

    try {
       await newPost.save((error)=>{
            if(error) return handleError(error);
        })
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}