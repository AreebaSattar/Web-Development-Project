const reducerforauth= (status={dataforauth:null, loading:false, error:false},action)=>
{
    switch(action.type){
        case "AUTH_START":
            return{...status,loading:true,error:false}
        case "AUTH_SUCCESS":
            localStorage.setItem("vetprof",JSON.stringify({...action?.data}))
            return{...status,dataforauth:action.data,loading:false,error:false}
        default:
            return status
             
    }
}
export default authenticationred