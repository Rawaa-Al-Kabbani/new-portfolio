import React from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "visible",
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "5%",
  },
  gridList: {
    flexWrap: "wrap",
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  tooltip: {
    padding: "10px 15px",
    lineHeight: "1.7em",
    boxShadow:
      "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontWeight: "400",
  },
}));

function ProjectList(props) {
  const classes = useStyles();
  function getCols(screenWidth) {
    if (isWidthUp("lg", screenWidth)) {
      return 2;
    }
    if (isWidthUp("md", screenWidth)) {
      return 2;
    }
    if (isWidthUp("sm", screenWidth)) {
      return 2;
    }
    return 1;
  }

  const cols = getCols(props.width);
  return (
    <div className={classes.root}>
      <GridList
        cols={cols}
        spacing={60}
        style={{ width: "90%" }}
        className={classes.gridList}
      >
        {props.projects.map((project) => (
          <GridListTile
            key={project.key}
            classes={{ root: classes.titleBar }}
            action={{}}
          >
            <img src={project.image} alt={project.key} />
            <GridListTileBar
              title={project.key}
              subtitle={
                <Hidden smDown>
                  <Tooltip
                    title={project.about}
                    placement={window.innerWidth > 959 ? "top" : "bottom"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <span>{project.about}</span>
                  </Tooltip>
                </Hidden>
              }
              actionIcon={
                <IconButton
                  aria-label="Go to project"
                  className={classes.icon}
                  href={project.link}
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default withWidth()(ProjectList);
