import React from "react";
import "./FollowersPanel.css"

import {Followers} from '../../Data/FollowersData.js'
const FollowersPanel=()=>{
    
    return(

        <div className = "FollowerCard">

            <h3>Follow</h3>

            {Followers.map((follower,id)=>{
                return(
                    <div className = "follower">
                        <div>
                            <img src={follower.img} alt="" className='followerImage'/>
                            <div>
                                <div className= "name">
                                    <span>
                                        {follower.name}
                                    </span>
                                    <span>
                                        {follower.username}
                                    </span>
                                </div>

                                <button class = "followPerson">
                                     Follow
                                </button>
                            </div>
                        </div>
                    </div>
                )
                }
            )}
                
        </div>

    )

}

export default FollowersPanel