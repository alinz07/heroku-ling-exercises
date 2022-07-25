import React from "react";
import { Grid, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
    return (
        <Grid
            container
            alignItems="center"
            id="contact-info"
            justifyContent="center"
            mt={10}
        >
            <Grid item xs={12} md={2} p={2}>
                <h2 id="contact-title">Say hello</h2>
            </Grid>

            <Grid item xs={12} md={2} p={2}>
                262.305.4411
            </Grid>
            <Grid item xs={12} md={2} p={2} container>
                <Grid item pr={1}>
                    <a
                        className="contact-anchor"
                        href="https://www.linkedin.com/in/tony-l-b19b0119/"
                    >
                        LinkedIn
                    </a>
                </Grid>
                <Grid item>
                    <LinkedInIcon />
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} p={2} container>
                <Grid item pr={1}>
                    <a
                        className="contact-anchor"
                        href="https://github.com/alinz07"
                    >
                        Github
                    </a>
                </Grid>

                <Grid item>
                    <GitHubIcon />
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} p={2} container>
                <Grid item pr={1}>
                    <a
                        className="contact-anchor"
                        href="https://www.instagram.com/tonylinz07/"
                    >
                        Instagram
                    </a>
                </Grid>
                <Grid item>
                    <InstagramIcon />
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} p={2} container>
                <Grid item pr={1}>
                    <Tooltip title="Email Tony">
                        <a
                            className="contact-anchor"
                            href="mailto:TonyLLinz@gmail.com/"
                        >
                            TonyLLinz@gmail.com
                        </a>
                    </Tooltip>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;
