import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderRightLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="projects"
          title="Take a look at my projects"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="/projects"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-list"} />
            <Hidden mdUp>Projects</Hidden>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin"
          title="Follow me on LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/rawaa-kabbani"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
            <Hidden mdUp>Follow me on LinkedIn</Hidden>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Check out my GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/Rawaa-Al-Kabbani"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github-square"} />
            <Hidden mdUp>Check out my GitHub</Hidden>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="email"
          title="Send me an email"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="mailto:rawaa.alkabbani@outlook.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-envelope-square"} />
            <Hidden mdUp>Send me an email</Hidden>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
