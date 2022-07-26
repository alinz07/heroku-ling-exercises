import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid";
import pdf from "../../assets/Tony-Linz-Resume.pdf";
import Student from "../Student";

function StudentList() {
	const [students, setStudents] = useState([]);

	fetch("/api/students", {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((studentListArr) => {
			setStudents(studentListArr);
		})
		.catch((err) => console.log(err));

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
					<Grid id="tech-prof-ul" pt={0}>
						{students.map((student) => (
							<Student
								key={student._id}
								initials={student.initials}
								parent_email={student.parent_email}
							></Student>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default StudentList;
