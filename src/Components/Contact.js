import React from "react";
import "../style/Contact.css";
import emailIcon from "../images/email.svg";
import mapMarkerIcon from "../images/map-marker.svg";

function Contact(){
    return (
        <section id="contact">
            <h1>Contact <span></span></h1>
            <p>If you would like to get in touch with me you can do it through email or LinkedIn <span style={{fontSize:"2rem"}}>&#128512;</span>.</p>
            <p>
                <img src={mapMarkerIcon} alt="map marker icon"/>
                <span>Venezuela</span> 
            </p>
            <p>
                <img src={emailIcon} alt="mail icon"/>
                <span>eduardosr1599@gmail.com</span> 
            </p>
            <div>
                <a href="https://www.linkedin.com/in/eduardo-s%C3%A1nchez-rebell%C3%B3n/" target="_blank" rel="noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn"/>
                </a>
                <a href="https://github.com/ewardou/" target="_blank" rel="noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github"/>
                </a>
            </div>
        </section>
    )          
}

export default Contact;