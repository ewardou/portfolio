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
                    description="It is an eCommerce website built with React.js. Users can browse the available products and add items to the cart. You can check individual product details and adjust the number of cart products."
                    minImage={shoppingImgWebp}
                    image={shoppingImg}
                    demo="https://ewardou.github.io/shopping-cart/"
                    source="https://github.com/ewardou/shopping-cart"/>
                <ProjectCard title="Where's Waldo"
                    description="The app was made with React.js and Firebase. The goal is to find the targeted video game characters in the shortest time possible. It uses Firebase's firestore and cloud storage services to get the needed assets and information."
                    minImage={waldoImgWebp}
                    image={waldoImg}
                    demo="https://ewardou.github.io/wheres-waldo/"
                    source="https://github.com/ewardou/wheres-waldo"/>
                
                <ProjectCard title="Battleship"
                    description="A Battleship game project where a user plays against the computer. The player can deploy its float as desired using drag and drop or randomly with a button."
                    minImage={battleshipImgWebp}
                    image={battleshipImg}
                    demo="https://ewardou.github.io/battleship/"
                    source="https://github.com/ewardou/battleship"/>
                
                <ProjectCard title="Memory card"
                    description="This app was made with React.js. After every selection the cards shuffle. The goal is to maximize the score by not selecting the same card again. The game shows the current and best score."
                    minImage={memoryImgWebp}
                    image={memoryImg}
                    demo="https://ewardou.github.io/memory-card/"
                    source="https://github.com/ewardou/memory-card"/>
                <ProjectCard title="Tic tac toe"
                    description="It is the classic game of tic tac toe. The user has the option of playing against another player locally or against the CPU."
                    minImage={tictactoeImgWebp}
                    image={tictactoeImg}
                    demo="https://ewardou.github.io/tic-tac-toe/"
                    source="https://github.com/ewardou/tic-tac-toe"/>
                <ProjectCard title="Todo list"
                    description="This app is used to make lists of pending tasks. Tasks can be highlighted as relevant and you can set a deadline for them. It uses local storage to store the data for future visits."
                    minImage={todoImgWebp}
                    image={todoImg}
                    demo="https://ewardou.github.io/todo-list/"
                    source="https://github.com/ewardou/todo-list"/>
                <ProjectCard title="Weather app"
                    description="This app shows the current weather of a city. It uses OpenWeatherMap API to fetch the weather data. The app changes the background according to different weather conditions."
                    minImage={weatherImgWebp}
                    image={weatherImg}
                    demo="https://ewardou.github.io/weather-app/"
                    source="https://github.com/ewardou/weather-app"/>
                <ProjectCard title="Library"
                    description="This application works as a personal library where the user can keep a record of planned to read / already read books. Firebase was implemented into the project to manage the books' data."
                    minImage={libraryImgWebp}
                    image={libraryImg}
                    demo="https://ewardou.github.io/library/"
                    source="https://github.com/ewardou/library"/>
                <ProjectCard title="Calculator"
                    description="It is a simple Javascript calculator which can handle basic operations. It has keyboard support."
                    minImage={calculatorImgWebp}
                    image={calculatorImg}
                    demo="https://ewardou.github.io/calculator/"
                    source="https://github.com/ewardou/calculator"/>
            </div>
        </section>
    )
}

export default Projects;