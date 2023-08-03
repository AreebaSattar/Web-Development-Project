import mongoose from "mongoose";
const veteranchema= mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        profession:{
            type:String,
            required:true
        },
        hobbies:{
            type:[String],
           
        },
        organisation:{
            type:Boolean,
            default:false

        },
        email:{
            type:String,
           
        },
        displaypic:String,
        coverpic:String,
        personaldets:String,
        followers:[],
        following:[]



    },
    {timestamps:true}

)

const VeteranModel= mongoose.model("veterans",veteranchema);
export default VeteranModel;
