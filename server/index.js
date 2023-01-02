import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "../server/routes/posts.js";


const app = express();

app.use(bodyParser.json({limit:"30mb",extented:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//by using this you can give prefix to it for calling this 192.168.0.5:5000/posts
app.use("/posts",postRoutes);


const CONNECTION_URL = "mongodb+srv://mernPractice:12345@cluster0.eff2scx.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', true);


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error.message);
});
