import React from "react";
import Grid from "@mui/material/Grid";

function About() {
	return (
		<Grid
			container
			direction="column"
			justify-content="center"
			alignItems="center"
			id="react-card"
			wrap="wrap"
			mx="auto"
			my={9}
		>
			<Grid item p={2} fontSize={25}>
				<h2 id="about-title">About Me</h2>
			</Grid>
			<Grid item id="about-para" p={2}>
				<a href="https://www.psha.org/member-center/pdfs/LingSixSound6.pdf">
					Ling Sound Check Instructions pdf
				</a>
			</Grid>
			<Grid item id="about-para" p={2}>
				<a href="https://www.youtube.com/watch?v=Ot1zRYY9Lbg">
					Video Intructions
				</a>
			</Grid>
		</Grid>
	);
}

export default About;
