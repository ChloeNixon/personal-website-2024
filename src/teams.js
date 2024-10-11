import React from "react";
import "./App.css";
import {Row, Col} from "antd";

const teams = [
    {
        club: "Out in Engineering",
        title: "Community Outreach Chair",
        desc: "Out in Engineering creates community and networking events for LGBTQ+ students in engineering." +
            "I am involved in leading the design of all club iconography as well as creating posters, tabling, " +
            "and other marketing in order to promote the club. I have created the design for and organized the " +
            "ordering of over 2,000$ worth of merchandise products for this organization. ",
    },
    {
        club: "Vanderbilt Data Science",
        title: "Vice President & Marketing Director",
        desc: "Vandy Data Science creates collaborates with numerous non-profits to create semester-long projects that" +
            "help the company. I have constructed dev assignment write-ups, aiding in delegation of executive activities, " +
            "constructing club events, and designing new logos, template designs, posters and iconography.",
    },
    {
        club: "Google Developer Student Club",
        title: "Director of Marketing",
        desc: "I help in creating workshop templates for beginning developers. As well as being responsible for " +
            "creating the club logo, color scheme, posters and other promotional designs to get intro programmers involved in the chapter.",
    },
    {
        club: "VandyHacks",
        title: "Product Designer",
        desc: "Vanderbilt’s largest student-run hackathon.\n" +
            "I am part of the team responsible for creating new assets, logos, themes, posters and other designs " +
            "for all organization events, and am a major part of developing the promotional website " +
            "for the annual hackathon.",
    },
]

const Teams = () => {
    return (
        <div>
            <div className="background">
                {teams.map((team) => (
                    <div>
                        <div className="one-project">
                            <div className="header">
                                {team.club}
                            </div>
                            <div className="subheader">
                                {team.title}
                            </div>
                            <div className="body-def">
                                {team.desc}
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teams;