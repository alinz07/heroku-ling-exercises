import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function Nav(props) {
    const {
        navOptions = [
            {
                name: "About me",
                arrow: <ArrowBackOutlinedIcon id="eyecon" />,
                miles: " 0.1 MI",
            },
            {
                name: "Portfolio",
                arrow: <ArrowForwardOutlinedIcon id="eyecon" />,
                miles: " 0.4 MI",
            },
            {
                name: "Contact",
                arrow: <ArrowUpwardOutlinedIcon id="eyecon" />,
                miles: " 1.3 MI",
            },
            {
                name: "Resume",
                arrow: <ArrowForwardOutlinedIcon id="eyecon" />,
                miles: " 1.7 MI",
            },
        ],
        setCurrentNav,
        currentNav,
        contactSelected,
        setContactSelected,
    } = props;
    return (
        <Grid
            container
            item
            id="nav-container"
            xs={12}
            justifyContent="space-evenly"
        >
            {navOptions.map((navOption) => (
                <Grid item key={navOption.name} id="nav-btn-div">
                    <Button
                        variant="contained"
                        id={`${
                            currentNav.name === navOption.name &&
                            !contactSelected
                                ? "navActive"
                                : "navBtn"
                        }`}
                        startIcon={navOption.arrow}
                        key={navOption.name}
                        onClick={() => {
                            setCurrentNav(navOption);
                            if (navOption === "Contact") {
                                setContactSelected(true);
                            } else {
                                setContactSelected(false);
                            }
                        }}
                    >
                        {navOption.name}&nbsp;&nbsp;&nbsp;&nbsp;
                        {navOption.miles}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
}

export default Nav;
