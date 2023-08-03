import VeteranModel from '../Models/UserModel.js'
//How we display a user
export const getvet= async(req, res)=>{
    const id=req.params.id;
   
    try{
        const user = await VeteranModel.findById(id)
        
        if(user){

            const{password,...otherDetails}=user._doc
            res.status(200).json(otherDetails)
        }
        else{
            res.status(404).json("user does not exist")
        }
    }
    catch(error){
        res.status(500).json(error)
    }
};



//changing a user
export const  updatingvet=async(req,res)=>{
    // jo update horaha hai
    const ayedee=req.params.id
    //current vet is jo krrha hai apna 
    const {currentVet, password}=req.body;
    if(ayedee===currentVet){
        try{
            // new true humain naye update kee info de gaa we dont do this toh msla hojayega
            if(password){
                req.body.password=password
            }
            const user= await VeteranModel.findByIdAndUpdate(ayedee, req.body,{new:true} )
            res.status(200).json(user)
        }
        catch{
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("accessing denied")
    }

}

export const followauser=async(req,res)=>{
    const ayedee=req.params.id
    const{currentvet}=req.body
    if(ayedee===currentvet){
        res.status(403).json("You cant follow yourself")
    }
    else{
        try{
            const followuser=await VeteranModel.findById(ayedee)
            const followinguser=await VeteranModel.findById(currentvet)
            //agar dusray keh followers main humara banda nhi toh usko daal dain
            if(!followuser.followers.includes(currentvet)){
                await followuser.updateOne({$push:{followers: currentvet}})
                await followinguser.updateOne({$push:{following: ayedee}})
                res.status(403).json("user followed")
            }
            else{
                req.status(403).json("you already follow the yser")
            }
        }
        catch(error){
            res.status(500).json(error)
        }
    }
};



export const updatehobby=async(req,res)=>{
    //const ayedee=req.params.id
   const{currentvet}=req.body
    const{newhobby}=req.body
    try{
        const hobbyupdate=await VeteranModel.findById(ayedee)
   await hobbyupdate.updateOne({$push:{hobbies: newhobby}})
    }
    catch(error){
        res.status(500).json(error)
    }
};