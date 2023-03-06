import React from "react";
import "../style/ProjectCard.css";
import xmlIcon from "../images/xml.svg";
import externalLinkIcon from "../images/open-in-new.svg";

function ProjectCard({title, description, minImage,image, demo, source}) {
    return (
        <div className="card">
            <picture>
                <source type="image/webp" srcSet={minImage} />
                <img src={image} alt=""/>
            </picture>
            <h2>{title}</h2>
            <p>{description}</p>
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