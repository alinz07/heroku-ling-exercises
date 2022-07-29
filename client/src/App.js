import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";
import StudentList from "./components/StudentList";
import { Grid } from "@mui/material";

function App() {
	const [contactSelected, setContactSelected] = useState(false);
	const [navOptions] = useState([
		{ name: "Daily Exercises" },
		{ name: "Portfolio" },
		{ name: "Login" },
		{ name: "Students" },
	]);
	const [currentNav, setCurrentNav] = useState(navOptions[0]);
	const [thankYou, setThankYou] = useState(false);

	return (
		<Grid container justifyContent="center">
			<Grid item xs={12}>
				<Header
					setCurrentNav={setCurrentNav}
					currentNav={currentNav}
					contactSelected={contactSelected}
					setContactSelected={setContactSelected}
				></Header>
			</Grid>
			<Grid item xs={12}>
				{currentNav.name === "Daily Exercises" && <About></About>}
				{currentNav.name === "Portfolio" && <Project></Project>}
				{currentNav.name === "Contact" && (
					<Contact
						thankYou={thankYou}
						setThankYou={setThankYou}
					></Contact>
				)}
				{currentNav.name === "Students" && <StudentList></StudentList>}
			</Grid>
			<Grid item xs={12}>
				<Footer></Footer>
			</Grid>
		</Grid>
	);
}

export default App;
