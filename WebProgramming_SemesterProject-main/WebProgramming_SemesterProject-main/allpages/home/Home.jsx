import React from 'react'
import './Home.css'
import ProfilePanel from '../../components/ProfilePanel/ProfilePanel'
import PostPanel from '../../components/PostPanel/PostPanel'
import PostCard from '../../components/PostCard/PostCard'
import Hobbies from '../../components/Hobbies/Hobbies'

const Home = () =>{

    return(

        <div className = "HomePage">
            <div className = "Profile">
                <h3>Profile</h3>
                <ProfilePanel />
            </div>

            <div className = "PostPanel">
                <h3>Posts</h3>
                <PostPanel/>
                <PostCard/>
            </div>

            <div className = "hobbiesSide">
                 <h3>Hobbies</h3>
                 <Hobbies/>
            </div>
        </div>
    )

}

export default Home