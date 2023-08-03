import React from 'react'
import './ProfileCard.css'
import Profile from '../../img/download.jpeg'

const ProfileCard = () =>{

    return(
        <div className = "CardProfile">
            <div className = "ProfImg">

                <img src= {Profile} alt=""/>

            </div>

            <div className = "ProfName">
                <span>Zuha Umar</span>
                <span>Profession: Web Developer</span>
            </div>

            <div className = "statusFollower">
                <div>
                    <div className = "sfollow">
                        <span>24</span>
                        <span>Following</span>
                    </div>

                    <div className = "sfollow">
                        <span>45</span>
                        <span>Followers</span>
                    </div>


                </div>
            </div>

            <span>
                View Profile
            </span>
        </div>
    )

}

export default ProfileCard