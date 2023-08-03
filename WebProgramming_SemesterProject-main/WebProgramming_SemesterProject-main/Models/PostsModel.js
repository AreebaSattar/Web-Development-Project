
import mongoose  from "mongoose";
const postSchema=mongoose.Schema(
    {
        userid:{
            type:String,
            required:true
        },
        description:String,
        likes:[],
        image: String,
    },
    {timestamps:true}
)


var postmodel=mongoose.model("poststextpic", postSchema)
export default postmodel

// import mongoose from "mongoose";
// const postschema= mongoose.Schema(
//     {
//         username:{
//             type:String,
//             required:true
//         },
//         password:{
//             type:String,
//             required:true
//         },
//         firstname:{
//             type:String,
//             required:true
//         },
//         lastname:{
//             type:String,
//             required:true
//         },
//         profession:{
//             type:String,
//             required:true
//         },
//         hobbies:{
//             type:[String],
           
//         },
//         organisation:{
//             type:Boolean,
//             default:false

//         },
//         email:{
//             type:String,
           
//         },
//         displaypic:String,
//         coverpic:String,
//         personaldets:String,
//         followers:[],
//         following:[]



//     },
//     {timestamps:true}

// )

// const VeteranModel= mongoose.model("veterans",veteranchema);
// export default VeteranModel