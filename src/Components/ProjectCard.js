import React from "react";
import "../style/ProjectCard.css";
import xmlIcon from "../images/xml.svg";
import externalLinkIcon from "../images/open-in-new.svg";
import Tags from "./Tags";

function ProjectCard({title, description, minImage,image, demo, source, tags}) {
    return (
        <div className="card">
            <picture>
                <source type="image/webp" srcSet={minImage} />
                <img src={image} alt=""/>
            </picture>
            <h2>{title}</h2>
            <p>{description}</p>
            <Tags tags={tags}/>
            <div>
                <a target="_blank" href={demo} rel="noreferrer">
                        Demo <img src={externalLinkIcon} alt="" />
                </a>
                <a target="_blank" href={source} rel="noreferrer">
                        Source <img src={xmlIcon} alt="" />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;