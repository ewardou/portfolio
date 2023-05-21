import React from "react";

export default function Tags({tags}){
    const array = tags.map(tag => {
        return <span key={tag}>{tag}</span>
    });

    return (
        <div className="tags">
            {array}
        </div>
    )
}