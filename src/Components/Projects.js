import React from "react";
import "../style/Projects.css";
import ProjectCard from "./ProjectCard";
import calculatorImg from "../images/calculator.png"
import calculatorImgWebp from "../images/calculator.webp";
import shoppingImg from "../images/shopping.png";
import shoppingImgWebp from "../images/shopping.webp";
import waldoImg from "../images/waldo.png";
import waldoImgWebp from "../images/waldo.webp";
import weatherImg from "../images/weather.png";
import weatherImgWebp from "../images/weather.webp";
import tictactoeImg from "../images/tictactoe.png";
import tictactoeImgWebp from "../images/tictactoe.webp";
import battleshipImg from "../images/battleship.png";
import battleshipImgWebp from "../images/battleship.webp";
import todoImg from "../images/todo.png";
import todoImgWebp from "../images/todo.webp";
import memoryImg from "../images/memory.png";
import memoryImgWebp from "../images/memory.webp";
import libraryImg from "../images/library.png";
import libraryImgWebp from "../images/library.webp";

function Projects (){
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div>
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
                
                <ProjectCard title="Battleship"
                    description="-"
                    minImage={battleshipImgWebp}
                    image={battleshipImg}
                    demo="https://ewardou.github.io/battleship/"
                    source="https://github.com/ewardou/battleship"/>
                
                <ProjectCard title="Memory card"
                    description="-"
                    minImage={memoryImgWebp}
                    image={memoryImg}
                    demo="https://ewardou.github.io/memory-card/"
                    source="https://github.com/ewardou/memory-card"/>
                <ProjectCard title="Tic tac toe"
                    description="-"
                    minImage={tictactoeImgWebp}
                    image={tictactoeImg}
                    demo="https://ewardou.github.io/tic-tac-toe/"
                    source="https://github.com/ewardou/tic-tac-toe"/>
                <ProjectCard title="Todo list"
                    description="-"
                    minImage={todoImgWebp}
                    image={todoImg}
                    demo="https://ewardou.github.io/todo-list/"
                    source="https://github.com/ewardou/todo-list"/>
                <ProjectCard title="Weather app"
                    description="-"
                    minImage={weatherImgWebp}
                    image={weatherImg}
                    demo="https://ewardou.github.io/weather-app/"
                    source="https://github.com/ewardou/weather-app"/>
                <ProjectCard title="Library"
                    description="-"
                    minImage={libraryImgWebp}
                    image={libraryImg}
                    demo="https://ewardou.github.io/library/"
                    source="https://github.com/ewardou/library"/>
                <ProjectCard title="Calculator"
                    description="-"
                    minImage={calculatorImgWebp}
                    image={calculatorImg}
                    demo="https://ewardou.github.io/calculator/"
                    source="https://github.com/ewardou/calculator"/>
            </div>
        </section>
    )
}

export default Projects;