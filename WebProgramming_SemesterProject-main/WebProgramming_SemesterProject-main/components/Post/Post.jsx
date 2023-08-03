import React from 'react'
import './Post.css'

const Post = ({data}) =>{
    return(
        <div className = "postsMain">

            <div>

                <div className="postDesc">
                    <span><b>{data.name}</b></span>
                    &nbsp;
                    &nbsp;
                    <span>{data.text}</span>
                </div>

                <button className="like">
                    Like
                </button>
            </div>

        </div>
    )
}

export default Post