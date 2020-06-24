import React from "react";

const PostPage = ({ image, altImage}) => {
    console.log({image});
    return(
        <div className = "post-page">
            <img src= {image} alt= {altImage}/>
        </div>
    )
}

export default PostPage;

//{image} alt= {altImage}