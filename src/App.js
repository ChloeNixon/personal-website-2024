import React from "react";
import "./App.css";
import {Row, Col} from "antd";
import Projects from "./projects.js"

import hero from "./assets/hero.png"
import moon from "./assets/moon.png"
import cn from "./assets/cn.png"
import cnsubheader from "./assets/cn-subheader.png"
import git from "./assets/github-icon.png"
import email from "./assets/email-icon.png"
import linkedin from "./assets/linkedin-icon.png"
import resume from "./assets/resume-icon.png"
import abcloud from "./assets/aboutuscloud.png"
import snake from "./assets/snake.png"
import book from "./assets/book.png"
import coffee from "./assets/coffee.png"
import placeholder from "./assets/blankspace-01.png"
import projstartclouds from "./assets/proj-header-clouds-04.png"
import projendclouds from "./assets/proj-footer-clouds-04.png"

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
                <img className="moon-img" src={moon} alt=""/>
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
                            My name is Chloe, I'm a junior studying computer science at Vanderbilt University. I have
                            worked on frontend
                            and fullstack software projects and am currently learning I.O.S. development. I am also
                            making many
                            different connections within my school’s orgs. and clubs. I love software development for
                            giving me
                            the ability to build something completely new from the bottom up :)
                        </div>
                        <div className="reachme">
                            I’m currently looking for any and all new experiences in software development,
                            feel free to reach out to me!
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

            <img className="projclouds" src={projstartclouds} alt=""/>
            <div className="projects">
                <div className="projheader">
                    Projects
                </div>
                <Projects />
                <img className="projclouds" src={projendclouds} alt=""/>
            </div>
        </div>
    );
};

export default App;
