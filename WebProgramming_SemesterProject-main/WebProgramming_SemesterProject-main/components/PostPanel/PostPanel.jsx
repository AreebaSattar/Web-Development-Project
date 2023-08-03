import React, {useState,useRef} from 'react'
//import ProfileImage from "../../img/profileImg.jpg"
import "./PostPanel.css"

import {UilPlayCircle} from "@iconscout/react-unicons"
import { UilScenery } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"

const PostPanel = () =>{
    
    const[image,setImage] = useState(null)
    const imageRef = useRef()

    const ImgChange =(event) =>{
        if(event.target.files && event.target.files[0])
        {
            let img = event.target.files[0];
            setImage(

                {
                    image: URL.createObjectURL(img)
                }

            )
        }
    }

    return(

        <div className="Postmain">

            <div>
                <input type = "text" placeholder = "Write Something"/>
            </div>

            <div className="postOpts">
                <div className="opt"
                onClick={()=>imageRef.current.click()}
                >
              
                    <UilScenery/>
                    Photo
                </div>

                <div className="opt">
                    <UilPlayCircle/>
                    Video
                </div>

                <button className = "shareButton">
                    Share
                </button>

                <div style={{display:"none"}}>
                    <input type="file" name = "ChooseImg" ref = {imageRef} onChange={ImgChange}/>
                </div>

            </div>

        {image && (

            <div className = "prevImg">
                <UilTimes onClick = {()=>setImage(null)} />
                <img src={image.image} alt=""/>
            </div>
        ) }

        </div>

    )
}

export default PostPanel