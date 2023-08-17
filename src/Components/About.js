import React from "react";
import "../style/About.css";
import pfp from "../images/pfp.jpg";
import Skills from "./Skills";

function About(){
    return (
    <section id="about">
        <h1>About me <span></span></h1>
        <p>Hello <span>&#128075;</span></p>
        <p>My name is Eduardo. I'm an electrical engineer and a self-taught web developer. I started learning web development in March of 2022 after finding <a href="https://www.theodinproject.com" target="_blank" rel="noreferrer">The Odin Project</a> and <a href="https://www.freecodecamp.org" target="_blank" rel="noreferrer">FreeCodeCamp</a>, both are free and open-source platforms maintained by their incredible communities.</p>
        <p>Initially, I started to do it out of curiosity as I was looking for online courses to do. But little by little I became more invested in it, and therefore went on to learn how to develop basic front-end and back-end applications using different technologies along the way.</p>
        <p>I love learning, and I am always looking for new challenges and opportunities to grow and improve. This portfolio contains some of the projects I've done while making my way through the learning process.</p>
        <img src={pfp} alt=""/>
        <h2>Skills</h2>
        <p>These are some of the technologies I've been using recently: </p>
        <Skills />
    </section>)
}

export default About;