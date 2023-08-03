import VeteranModel from "../Models/UserModel.js";
// to secure and encrypt private data


//a new user signs up
export const RegisterVeteran= async(req, res)=>{
const {firstname,lastname, username, password, profession, email}= req.body;
const newVet= new VeteranModel({firstname, lastname, username, password, profession, email});
try{
await newVet.save();
res.status(200).json(newVet);
}
catch(error){
res.status(500).json({message: error.message})
}

};


// a veteran logs in

export const vetLog= async(req, res)=>{
 const {username, password}=req.body

 try{
   const vet= await VeteranModel.findOne({$and: [{username:username},{password:password}]})
   vet?res.status(200).json(vet):res.status(400).json("incorrect password or username")
    }
    catch(error){
    res.status(500).json({message: error.message})
    }
    
}