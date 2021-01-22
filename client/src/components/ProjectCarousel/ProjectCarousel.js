import React from "react";
import Carousel from "react-slick";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Card from "../Card/Card.js";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/components/carouselStyle.js";

const useStyles = makeStyles({
  ...styles,
  projectsTitle: {
    textAlign: "center",
    marginTop: "40px",
    minHeight: "32px",
    textDecoration: "none",
    fontWeight: "300",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
});

function ProjectCarousel(props) {
  function getDotsEnabled(screenWidth) {
    if (isWidthUp("sm", screenWidth)) {
      return true;
    }
    return false;
  }

  const classes = useStyles();
  const settings = {
    dots: getDotsEnabled(props.width),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h3 className={classes.projectsTitle}>My projects</h3>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {props.projects.map((project) => (
                  <div key={project.key}>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img
                        src={project.image}
                        alt={project.key}
                        className="slick-image"
                      />
                    </a>
                  </div>
                ))}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withWidth()(ProjectCarousel);
