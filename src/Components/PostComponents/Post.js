import React from "react"

export default function Post(title, text) {
console.log({title})
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}