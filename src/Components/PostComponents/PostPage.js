import React from "react";

import Post from "./Post"

const PostPage = ({ image, title, text}) => {
    return(
        <div className = "post-page">
            <img src= {image}/>
            <h1>{title}</h1>
            <p>{text}</p>
            {/* <Post title = {title} text = {text}/> */}
        </div>
    )
}

export default PostPage;