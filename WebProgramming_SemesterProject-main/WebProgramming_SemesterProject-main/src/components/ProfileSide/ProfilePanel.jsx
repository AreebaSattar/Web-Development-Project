import React from 'react'
import Profile from '../../img/profileImg.jpg'
import './ProfilePanel.css' 

const ProfilePanel = () => {
    return(
        <div className = "ProfPan">
            <div className = "ProfImg">
                <img src={Profile}  alt="" />
            </div>

            <div className="ProfName">
                    <span>
                        Zuha
                    </span>

                    <span>
                        Web Developer
                    </span>
            </div>

            <div className="followS">
        
                        <div className="follow">
                            <span>
                                500
                            </span>
                            <span>
                                Following
                            </span>
                        </div>
                        <div className="follow">
                            <span>
                                20
                            </span>
                            <span>
                                Followers
                            </span>
                        </div>
              
            </div>

            <span class = "myprof">
                My Profile
            </span>
        </div>
    )
}

export default ProfilePanel