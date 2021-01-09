import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import HeaderRightLinks from "../components/Header/HeaderRightLinks";
import HeaderLeftLinks from "../components/Header/HeaderLeftLinks";

import backgroundImage from "../assets/img/background.jpg";

import Parallax from "../components/Parallax/Parallax";
import About from "../components/About/About";
import SkillList from "../components/SkillList/SkillList";
import ProjectCarousel from "../components/ProjectCarousel/ProjectCarousel";
import styles from "../assets/jss/material-kit-react/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
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
        <About projects={props.projects} displayAbout={true} />
        <SkillList projects={props.projects} />
        <ProjectCarousel projects={props.projects} />
      </div>
    </div>
  );
}
