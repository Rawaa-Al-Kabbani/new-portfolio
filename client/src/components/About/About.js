import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import styles from "../../assets/jss/material-kit-react/pages/profilePage.js";
import profileImage from "../../assets/img/profile.jpg";

const useStyles = makeStyles(styles);

export default function About(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  function getDescription() {
    if (props.displayAbout) {
      return (
        <div className={classes.description}>
          <p>
            I am a very curious and creative person that also happens to be a
            software developer. I am always looking to improve myself and learn
            something new.{" "}
          </p>
        </div>
      );
    }
  }
  return (
    <div id="about">
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img src={profileImage} alt="..." className={imageClasses} />
              </div>
              {props.displayAbout ? (
                <div className={classes.name}>
                  <h3 className={classes.title}>Rawaa Al Kabbani</h3>
                  <h6>Software Developer</h6>
                </div>
              ) : (
                <div className={classes.name}>
                  <h3 className={classes.title}>My projects</h3>
                </div>
              )}
            </div>
          </GridItem>
        </GridContainer>
        {getDescription()}
      </div>
    </div>
  );
}
