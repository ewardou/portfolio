import React from "react";
import "../style/About.css";
import pfp from "../images/pfp.jpg";
import Skills from "./Skills";

function About(){
    return (
    <section id="about">
        <h1>About me <span></span></h1>
        <p>Hello <span>&#128075;</span></p>
        <p>My name is Eduardo. I'm a self-taught web developer and an electrical engineering graduate. 
        I started learning web development in March of 2022 after finding <a href="https://www.theodinproject.com">The Odin Project</a>, an open-source curriculum maintained by its incredible community. 
        </p>
        <p>Initially, I started to do it out of curiosity, but little by little I became more invested 
            in it, up to the point I decided that I would like to give myself a try on doing it professionally. 
            I love learning, and  I am always looking for new challenges and opportunities to grow and improve.
        </p>
        <p>This portfolio contains some of the projects I've done while making my way through the curriculum.</p>
        <img src={pfp} alt=""/>
        <h2>Skills</h2>
        <p>These are some of the technologies I've been using recently: </p>
        <Skills />
    </section>)
}

export default About;