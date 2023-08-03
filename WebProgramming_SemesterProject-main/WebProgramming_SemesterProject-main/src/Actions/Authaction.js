import * as authenticationapi from '../api/AuthRequest.js'

export const logging=(FormData)=>async(dispatch)=>{
    dispatch({type:"AUTH_START"})
    try{
    const{details}=await authenticationapi.logging(FormData)
    dispatch({type:"AUTH_SUCCESS", data:data})
    }
    catch(error){
        console.log(error)
        dispatch({type:"AUTH_FAIL "})
    }
}



export const registring=(FormData)=>async(dispatch)=>{
    dispatch({type:"AUTH_START"})
    try{
    const{details}=await authenticationapi.registring(FormData)
    dispatch({type:"AUTH_SUCCESS"})
    }
    catch(error){
        console.log(error)
        dispatch({type:"AUTH_FAIL "})
    }
}