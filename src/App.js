import React from "react";
import "./App.css";
import {Row, Col} from "antd";
import Projects from "./projects.js";

import hero from "./assets/hero.svg";
import cn from "./assets/cn.svg";
import cnsubheader from "./assets/cn-subheader.png";
import git from "./assets/github-icon.png";
import email from "./assets/email-icon.png";
import linkedin from "./assets/linkedin-icon.png";
import resume from "./assets/resume-icon.png";
import abcloud from "./assets/aboususcloud.svg";
import snake from "./assets/snake.png";
import book from "./assets/book.svg";
import coffee from "./assets/coffee.png";
import placeholder from "./assets/blankspace-01.png";
import projstartclouds from "./assets/proj-header-1.svg";
import projendclouds from "./assets/proj-header.svg";

function App() {
    return (
        <div className="desktop">
            <div className="hero">
                <div className="hero-wrapper">
                    {/*<div className="chloe-nixon">Chloe Nixon</div>*/}
                    {/*<div className="subheader1">Programmer - Web Developer - Designer</div>*/}
                    {/*<div className="subheader2">Head’s in the Clouds</div>*/}
                </div>
                <img className="hero-img" src={hero} alt=""/>
                <img className="chloenixon" src={cn} alt=""/>
                <img className="chloenixonsub" src={cnsubheader} alt=""/>
                <a href="https://github.com/chloenixon" target="_blank" rel="noreferrer" >
                    <img className="git-img" src={git} alt=""/>
                </a>
                <a href="mailto: chloe.p.nixon@vanderbilt.edu">
                    <img className="email" src={email} alt=""/>
                </a>
                <a href="https://linkedin.com/in/chloe-nixon-528174232/" target="_blank" rel="noreferrer" >
                    <img className="linkedin" src={linkedin} alt=""/>
                </a>
                <a href="https://1drv.ms/b/s!AqKKTc24j9gHjQQT750jvA79QB7n?e=6Bo1Hu" target="_blank" rel="noreferrer" >
                    <img className="resume" src={resume} alt=""/>
                </a>
            </div>
            <Row align="bottom">
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <aboutus>
                        <img className="abcloud" src={abcloud} alt=""/>
                        <div className="aboutus-header">
                            About Me
                        </div>
                        <div className="hello">
                            Hello!
                        </div>
                        <div className="aubody">
                            My name is Chloe, I'm a senior Computer Science major at Vanderbilt University. I have
                            experience working on fullstack and service-based software, and am looking fowards to
                            my career in software engineering in the near future.
                            I love connecting with campus organizations, leading large-scale projects, and designing websites.
                        </div>
                        <div className="reachme">
                            I’m currently open to new experiences in software development,
                            so feel free to reach out to me!
                        </div>
                        <br></br><br></br><br></br>
                    </aboutus>
                </Col>
                <Col xs={24} sm={24} md={24} lg={11} xl={11} offset={1}>
                    <div className="lovebox" style={{}}>
                        <div className="loveheader">
                            Some Things I Love Are:
                        </div>
                        <div className="lovetext lizard-text">
                            Reptiles
                        </div>
                        <img className="lizard" src={snake} alt=""/>
                        <div className="lovetext book-text">
                            Reading
                        </div>
                        <img className="book" src={book} alt=""/>
                        <div className="lovetext coffee-text">
                            Coffee
                        </div>
                        <img className="coffee" src={coffee} alt=""/>
                    </div>
                </Col>
            </Row>
            <img className="placeholder" src={placeholder} alt=""/>

            <div className="projects">
                <Projects />
                <img className="projclouds" src={projendclouds} alt=""/>
            </div>
        </div>
    );
};

export default App;
