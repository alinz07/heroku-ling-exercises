import React from "react";
import { Grid } from "@mui/material";

function Student(student) {
	const { initials, parent_email } = student;

	return (
		<Grid id="skill">
			{initials}
			{parent_email}
		</Grid>
	);
}

export default Student;
