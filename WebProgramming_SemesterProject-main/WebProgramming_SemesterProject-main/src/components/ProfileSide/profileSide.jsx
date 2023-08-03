import React from "react";
import ProfilePanel from "./ProfilePanel";
import FollowersPanel from "../FollowersPanel/FollowersPanel";
import PostsPanel from "../PostSide/PostSide.jsx"
import "./profileSide.css"

const ProfileSide=()=>{
    
    return(


        <div>
            <div class="row">
                <div class="column left">
                    <div className = "ProfileSide">
                    <ProfilePanel/> 
                    </div>
                </div>

                <div class="column middle">
                    <div className = "PostSide">
                    <PostsPanel/> 
                    </div>
                </div>

            </div>

            <div class="row">
            <div class="column left">
                <div className = "ProfileSide">
                <FollowersPanel/> 
                </div>
            </div>



            </div>
        </div>

    )

}

export default ProfileSide