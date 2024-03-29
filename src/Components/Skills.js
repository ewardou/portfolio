import React from "react";
import "../style/Skills.css";

function SkillCard({url, name}) {
    return (
        <div>
            <img src={url} alt={name}/>
            <p>{name}</p>
        </div>
    )
}

function Skills(){
    return (
        <div className="skills">
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                name="CSS"/>
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                name="HTML" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                name="Javascript" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                name="Typescript" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                name="React.js" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                name="Node.js" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                name="Express.js" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                name="Firebase" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                name="MongoDB" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                name="Git" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                name="Webpack" />
            <SkillCard 
                url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                name="TailwindCSS" />
        </div>
    )
}

export default Skills;