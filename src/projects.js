import React from "react";
import "./projects.css";
import {Row, Col} from "antd";

const projs = [
    {
        title: "Vanderbilt Data Science Club Website",
        tech: "React, Node.js, ChakraUI",
        desc: "Part of implementing the official Vanderbilt Data Science club website, creating a responsive feed" +
            "of club information using React packages and API integration.",
        cont1: "* Utilized the Facebook Basic Instagram Display API to create a responsive Instagram feed using async. " +
            "states, styled with ChakraUI grids and style components.",
        cont2: "* Designed the front page by applying ChakraUI grids, styles and themes along with Javascript " +
            "components and animations.",
        cont3: "",
    },
    {
        title: "Stuttgart Eagles",
        tech: "React, Node.js, HTML, CSS, .antd",
        desc: "I developed a React app website for Stuttgart Eagles, an NPO basketball team for children of military " +
            "families in Germany. I communicated with both another developer and the non-profit team to make a revamped " +
            "website for all team information. \n",
        cont1: "* Headed development of the site’s frontend by creating CSS animations, javascript-based animations and " +
            "transitions, an on-load component, image gallery using react packages, and unique graphics in order to " +
            "create engaging site visuals.",
        cont2: "* Modeled a responsive web layout for phone and computer screens using both .antd grid systems and CSS properties.",
        cont3: "",
    },
    {
        title: "VandyHacks X Promo Website",
        tech: "React, Node.js, Figma, Illustrator",
        desc: "I worked closely with a design team to create the design and layout for our hackathon’s " +
            "10th annual promotional website.",
        cont1: "* Modeled the theme, color scheme, graphics, outlines, and building designs for the website from scratch.",
        cont2: "* Drew assets using illustrator to create a neon cityscape, and closely collaborated with other designers to create a site outline in Figma.",
        cont3: "* Communicated with the development team to create wireframe drafts for multiple potential websites, and helped determine frontend tasks and components for the site.",
    },
    {
        title: "I.O.S. App Development, The Gist",
        tech: "Swift, SwitftUI, MongoDB, Figma",
        desc: "I’ve started production of an IOS task management app that works to use tomogachi-esc progression " +
            "centered around real-world task completion to make scheduling more engaging.",
        cont1: "* Drafted a figma layout of the main app pages and UI, including color schemes, icons, frontend and navbar.",
        cont2: "* Part of writing and editing of the documentation. \n",
        cont3: "",
    },
];

const Projects = () => {
    return (
        <div className="background">
            <Row className="wrapper" gutter={25} align="center">
                {projs.map((project) => (
                    <Col xs={23} sm={23} md={12} lg={12} xl={12}>
                        <div className="one-project">
                            <div className="header">
                                {project.title}
                            </div>
                            <div className="tech-stack">
                                {project.tech}
                            </div>
                            <div className="body-def">
                                {project.desc}
                            </div>
                            <div className="body-def contributions">
                                <ul>{project.cont1}</ul>
                                <ul>{project.cont2}</ul>
                                <ul>{project.cont3}</ul>
                            </div>
                            <br></br><br></br>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Projects;