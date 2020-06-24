import React from "react";

const PostPage = ({ image, title, text}) => {
    console.log({image});
    return(
        <div className = "post-page">
            <img src= {image}/>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default PostPage;