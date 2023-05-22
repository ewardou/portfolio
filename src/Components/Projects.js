import React from "react";
import "../style/Projects.css";
import ProjectCard from "./ProjectCard";
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
import libraryImg from "../images/library.png";
import libraryImgWebp from "../images/library.webp";
import blogImg from "../images/blog.png";
import blogImgWebp from "../images/blog.webp";
import membersImg from "../images/members.png";
import membersImgWebp from "../images/members.webp";

function Projects (){
    return (
        <section id="projects">
            <h1>Projects <span></span></h1>
            <div>
                <ProjectCard title="Shopping Cart"
                    description="It is an eCommerce website built with React.js. Users can browse the available products and add items to the cart. You can check individual product details and adjust the number of cart products."
                    minImage={shoppingImgWebp}
                    image={shoppingImg}
                    demo="https://ewardou.github.io/shopping-cart/"
                    source="https://github.com/ewardou/shopping-cart"
                    tags={["React.js", "HTML", "CSS"]}/>
                <ProjectCard title="Where's Waldo"
                    description="The app was made with React.js and Firebase. The goal is to find the targeted video game characters in the shortest time possible. It uses Firebase's firestore and cloud storage services to get the needed assets and information."
                    minImage={waldoImgWebp}
                    image={waldoImg}
                    demo="https://ewardou.github.io/wheres-waldo/"
                    source="https://github.com/ewardou/wheres-waldo"
                    tags={["React.js", "Firebase", "HTML", "CSS"]}/>
                
                <ProjectCard title="Battleship"
                    description="A Battleship game project where a user plays against the computer. The player can deploy its float as desired using drag and drop or randomly with a button."
                    minImage={battleshipImgWebp}
                    image={battleshipImg}
                    demo="https://ewardou.github.io/battleship/"
                    source="https://github.com/ewardou/battleship"
                    tags={["Javascript", "HTML", "CSS"]}/>
                
                <ProjectCard title="Blog API"
                    description="Personal blog app made of two client-side applications that fetch the information, in JSON format, from an API made with Express. A Mongo database stores all the blog data. Authentication with JWT is implemented for admin."
                    minImage={blogImgWebp}
                    image={blogImg}
                    demo="https://ewardou.github.io/blog-front-end/"
                    source="https://github.com/ewardou/blog-api"
                    tags={["React.js", "Express.js", "MongoDB", "HTML", "CSS"]}/>
                <ProjectCard title="Tic tac toe"
                    description="It is the classic game of tic tac toe. The user has the option of playing against another player locally or against the CPU."
                    minImage={tictactoeImgWebp}
                    image={tictactoeImg}
                    demo="https://ewardou.github.io/tic-tac-toe/"
                    source="https://github.com/ewardou/tic-tac-toe"
                    tags={["Javascript", "HTML", "CSS"]}/>
                <ProjectCard title="Weather app"
                    description="This app shows the current weather of a city. It uses OpenWeatherMap API to fetch the weather data. The app changes the background according to different weather conditions."
                    minImage={weatherImgWebp}
                    image={weatherImg}
                    demo="https://ewardou.github.io/weather-app/"
                    source="https://github.com/ewardou/weather-app"
                    tags={["Javascript", "HTML", "CSS"]}/>
                <ProjectCard title="Library"
                    description="This application works as a personal library where the user can keep a record of planned to read / already read books. Firebase was implemented into the project to manage the books' data."
                    minImage={libraryImgWebp}
                    image={libraryImg}
                    demo="https://ewardou.github.io/library/"
                    source="https://github.com/ewardou/library"
                    tags={["Javascript", "HTML", "Firebase","CSS"]}/>
                <ProjectCard title="Members only"
                    description="A members' site where users can sign up and write messages, where each user has different abilities and permissions given they provide the passcode ('mango'). The app uses Passport.js with local strategy for auth."
                    minImage={membersImgWebp}
                    image={membersImg}
                    demo="https://members-only-nze1.onrender.com/"
                    source="https://github.com/ewardou/members-only"
                    tags={["Express.js", "EJS", "MongoDB", "CSS"]}/>
            </div>
            <a href="https://github.com/ewardou?tab=repositories" target="_blank" rel="noreferrer">More projects</a>
        </section>
    )
}

export default Projects;