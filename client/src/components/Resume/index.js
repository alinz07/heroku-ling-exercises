import { Tooltip } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import pdf from "../../assets/Tony-Linz-Resume.pdf";

function Resume() {
    const techStack = [
        "AJAX",
        "Apollo Server",
        "Benchmark.js",
        "Bootstrap",
        "Client and server-side APIs",
        "CSS",
        "Express.js",
        "Foundation, Git",
        "GraphQL",
        "Handlebars.js",
        "Heroku",
        "HTML",
        "Javascript",
        "Jest",
        "jQuery",
        "MongoDB Express.js React Node (MERN)",
        "Mongoose",
    ];
    const techStack2 = [
        "Model-View-Controller (MVC) paradigm",
        "MUI React component library",
        "MySQL2",
        "NoSQL",
        "Object-Oriented Programming (OOP)",
        "Object Relational Mapping (ORM)",
        "Progressive Working Applications (PWA)",
        "Python",
        "Sequelize",
    ];
    return (
        <Grid
            container
            direction="column"
            justify-content="center"
            alignItems="center"
            id="react-card"
            wrap="wrap"
            m="auto"
        >
            <Grid item p={2} mt={2} xs={12}>
                <Tooltip title="download resume pdf">
                    <a id="resume" href={pdf} download>
                        Tony Linz Resume.pdf
                    </a>
                </Tooltip>
            </Grid>
            <Grid item pt={3} pb={1} fontSize={25}>
                <h3 id="tech-prof">Tech Proficiencies</h3>
            </Grid>
            <Grid item container justifyContent="space-around">
                <Grid item xs={5} textAlign="center">
                    <ul id="tech-prof-ul" pt={0}>
                        {techStack.map((skill) => (
                            <li id="skill" key={skill}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={5} textAlign="center">
                    <ul id="tech-prof-ul-2" pt={0}>
                        {techStack2.map((skill) => (
                            <li id="skill" key={skill}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Resume;
