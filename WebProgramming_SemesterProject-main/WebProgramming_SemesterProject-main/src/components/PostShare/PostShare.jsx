import React, {useState, useRef} from 'react'
//import ProfileImage from "../../img/profileImg.jpg"
import "./PostShare.css"

import {UilPlayCircle} from "@iconscout/react-unicons"
import { UilScenery } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"

const PostShare = () =>{

    const [image,setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event)=>{

        if(event.target.files && event.target.files[0])
        {
            let imagee = event.target.files[0]
            setImage({

                image: URL.createObjectURL(imagee),

            })
        }

    }
    
    return(

        <div className="Postmain">
            <div class = "textBox">
                <input type = "text" placeholder = "Write Something"/>
            </div>

            <div className="postOpts">
                <div className="opt">
                    onClick={()=>imageRef.current.click()}
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

                <div style={{display: "none"}}>
                     <input type="file" name="myImage" ref={imageRef}  onChange = {onImageChange}/>
                </div>
            </div>


            {image &&

<div className="prevImage">
    {UilTimes}
    <img src =  {image.image} alt="" />
</div>
}


        </div>

    )
}

export default PostShare