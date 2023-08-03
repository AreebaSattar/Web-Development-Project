import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileCard from '../ProfileCard.jsx/PofileCard'
import './ProfilePanel.css'

const ProfilePanel = () =>{

    return(
        <div className = "ProfileSide">
            <ProfileCard/>
            <FollowersCard/>
        </div>
    )
}

export default ProfilePanel