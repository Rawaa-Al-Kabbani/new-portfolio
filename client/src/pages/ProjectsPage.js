import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import HeaderRightLinks from "../components/Header/HeaderRightLinks";
import HeaderLeftLinks from "../components/Header/HeaderLeftLinks";
import ProjectList from "../components/ProjectList/ProjectList";
import styles from "../assets/jss/material-kit-react/pages/profilePage.js";
import classNames from "classnames";
import Parallax from "../components/Parallax/Parallax";
import backgroundImage from "../assets/img/background.jpg";
import About from "../components/About/About";

const useStyles = makeStyles(styles);

export default function ProjectsPage(props) {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="Rawaa Al Kabbani"
        rightLinks={<HeaderRightLinks />}
        leftLinks={<HeaderLeftLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
      <Parallax small filter image={backgroundImage} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <About projects={props.projects} displayAbout={false} />
        <div className={classes.space70} />
        <ProjectList projects={props.projects} />
      </div>
    </div>
  );
}
