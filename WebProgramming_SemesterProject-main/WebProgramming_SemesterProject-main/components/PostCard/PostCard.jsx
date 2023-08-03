import React from 'react'
import './PostCard.css'
import {PostsData} from '../../components/Data/PostsData'
import Post from '../Post/Post'

const PostCard = () =>{
    return(
        <div className = 'posts'>
            {PostsData.map((post,id)=>{
                return <Post data={post} id={id}/>
                    
            })}
        </div>
    )
}

export default PostCard