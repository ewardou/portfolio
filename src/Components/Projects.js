import React from "react";
import "../style/Projects.css";
import ProjectCard from "./ProjectCard";
import calculatorImg from "../images/calculator.png"
import calculatorImgWebp from "../images/calculator.webp";
import shoppingImg from "../images/shopping.png";
import shoppingImgWebp from "../images/shopping.webp";
import waldoImg from "../images/waldo.png";
import waldoImgWebp from "../images/waldo.webp";


function Projects (){
    return (
        <section id="projects">
            <h1>Projects</h1>
            <ProjectCard title="Shopping Cart" 
                description="-" 
                minImage={shoppingImgWebp}
                image={shoppingImg}
                demo="https://ewardou.github.io/shopping-cart/"
                source="https://github.com/ewardou/shopping-cart"/>
            <ProjectCard title="Where's Waldo" 
                description="-" 
                minImage={waldoImgWebp}
                image={waldoImg}
                demo="https://ewardou.github.io/wheres-waldo/"
                source="https://github.com/ewardou/wheres-waldo"/>
            <ProjectCard title="Calculator" 
                description="-" 
                minImage={calculatorImgWebp}
                image={calculatorImg}
                demo="https://ewardou.github.io/calculator/"
                source="https://github.com/ewardou/calculator"/>
        </section>
    )
}

export default Projects;