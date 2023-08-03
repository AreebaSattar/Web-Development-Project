import mongoose from "mongoose";
import postmodel from "../Models/PostsModel.js";
import VeteranModel from "../Models/UserModel.js";
//making a new post
export const makingapost= async(req,res)=>{
    const PostDetails= new postmodel(req.body)
    try{
       
            await PostDetails.save()
            res.status(200).json("post has been posted!")
    }
    catch(error){
        res.status(500).json("error in making post")
    }
}

//getting a post

export const getuserpost= async(req,res)=>{
    const ayeedee= req.params.id
    try{
       
            const thepost= await postmodel.findById(ayeedee)
            res.status(200).json(thepost)
    }
    catch(error){
        res.status(500).json("error in retriving post")
    }
}

///GETTING ALL THE POSTS IN A TIME LINE
export const displayalltimeline= async(req,res)=>{
    const userid= req.params.id
    try{
        const apneeposts=await postmodel.find({userid : userid})
        const aglonkeeposts= await VeteranModel.aggregate(
            [
                {
                    $match:{
                        _id: new mongoose.Types.ObjectId(userid)
                    }
                },
                {
                    $lookup:{
                        from:"poststextpics",
                        localField:"following",
                        foreignField:"userid"   ,
                    as:"aglonkeeposts"                 }
                },
                {
                    $project:{
                        aglonkeeposts:1,
                        _id:0
                    }
                }
            ]
        )
        res.status(200).json(apneeposts.concat(...aglonkeeposts[0].aglonkeeposts))
    }
    catch(error){
        res.status(500).json("error in making post") 
    }
}
