import React from 'react'
import {Followers} from '../Data/FollowersData'
import './FollowersCard.css'


const FollowersCard = () =>{
    return(
        <div className = "cardFollower">
            <h4>Your Followers</h4>

            {Followers.map((follower,id)=>{

                return(
                    <div className = "yourfollower">
                        <div className = "followerName">
                            <span>{follower.name}</span>
                            <span>{follower.username}</span>
                            <span>{follower.profession}</span>
                        </div>

                        <button className = "smolButton">
                            Follow Back
                        </button>
                    </div>
                )

            })}
        </div>
    )
}

export default FollowersCard