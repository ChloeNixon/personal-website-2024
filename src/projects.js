import React from "react";
import "./projects.css";
import {Row, Col} from "antd";
import projendclouds from "./assets/proj-header.svg";

const leads = [
    {
        title: "VandyHacks XI",
        position: "President",
        desc: "Organize Vanderbilt's annual student-run hackathon by leading logistics, development, and all major projects.",
    },
    {
        title: "Out in Engineering",
        position: "Head of Outreach",
        desc: "Manage org external communications, marketing, logos, and merchandise.",
    },
    {
        title: "Vanderbilt Data Science",
        position: "Former V.P. & Director of Marketing",
        desc: "Worked on designing the website, recruiting developers, and promoting all events.",
    },
    {
        title: "Google Developer Group",
        position: "Former Director of Design",
        desc: "Created logos, posters, marketing outreach for all events.",
    },
]

const projs = [
    {
        title: "VandyHacks XI Promo Website",
        position: "Project Manager & Lead Programmer",
        tech: "React, MantineUI, Illustrator, CSS",
        desc: "Lead developers in creating website, headed software programming & design.",
    },
    {
        title: "VandyHacks X Promo Website",
        position: "Designer",
        tech: "React, Node.js, Figma, Illustrator",
        desc: "Designer for assets and UI/UX for the VandyHacks X Website.",
    },
    {
        title: "\"Parked\" Hackathon Project",
        position: "Backend Developer",
        tech: "React, Kintone, RESTful API, Express, Node.js",
        desc: "Programmed Kintone backend API & backend, HooHacks winner of Best Use of Kintone DB",
    },
    {
        title: "Scrambled",
        position: "Developer",
        tech: "React, RESTful API, Express, Node.js, ChakraUI",
        desc: "Created project using dictionary API to make a hangman-type game.",
    },
    {
        title: "Stuttgart Eagles",
        position: "Co-Developer",
        tech: "React, Node.js, HTML, CSS, .antd",
        desc: "Developed a React app website for Stuttgart Eagles, an NPO children's basketball team."
    },
];

const Projects = () => {
    return (
        <div className="background">
            <div className="projects">
                <div className="projheader">
                    Leadership
                </div>
            </div>
            <Row className="wrapper" gutter={25} align="center">
                {leads.map((lead) => (
                    <Col xs={23} sm={23} md={12} lg={12} xl={12}>
                        <div className="one-project-lead">
                            <div className="header">
                                {lead.title}
                            </div>
                            <div className="position">
                                {lead.position}
                            </div>
                            <div className="tech-stack">
                                {lead.tech}
                            </div>
                            <div className="body-def">
                                {lead.desc}
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                    </Col>
                ))}
            </Row>
            <div className="projects">
                <div className="projheader">
                    Projects
                </div>
            </div>
            <Row className="wrapper" gutter={25} align="center">
                {projs.map((project) => (
                    <Col xs={23} sm={23} md={12} lg={12} xl={12}>
                        <div className="one-project">
                            <div className="header">
                                {project.title}
                            </div>
                            <div className="position">
                                {project.position}
                            </div>
                            <div className="tech-stack">
                                {project.tech}
                            </div>
                            <div className="body-def">
                                {project.desc}
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Projects;
