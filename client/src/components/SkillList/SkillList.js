import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import CustomLinearProgress from "../CustomLinearProgress/CustomLinearProgress.js";
import styles from "../../assets/jss/material-kit-react/pages/profilePage.js";

const useStyles = makeStyles(styles);

const COLORS = ["danger", "primary", "warning", "success", "rose", "info"];

const SKILLS = [
  {
    label: "Node.js",
    percentage: 90,
  },
  {
    label: "JavaScript",
    percentage: 90,
  },
  {
    label: "TypeScript",
    percentage: 80,
  },
  {
    label: "Java",
    percentage: 70,
  },
  {
    label: "Python",
    percentage: 80,
  },
  {
    label: "Express",
    percentage: 90,
  },
  {
    label: "React.js",
    percentage: 90,
  },
  {
    label: "Vue.js",
    percentage: 70,
  },
  {
    label: "Docker",
    percentage: 90,
  },
  {
    label: "Git",
    percentage: 90,
  },
  {
    label: "Cypress",
    percentage: 80,
  },
  {
    label: "Jest",
    percentage: 80,
  },
];

const getColorForIndex = (index) => {
  return COLORS[index % COLORS.length];
};

export default function SkillList(props) {
  const classes = useStyles();
  return (
    <div id="skills">
      <div className={classes.container}>
        <GridContainer justify="center" className={classes.skillGrid}>
          <GridItem xs={12} sm={12} md={6}>
            <h3 className={classes.skillTitle}>Skills</h3>
            {SKILLS.map((skill, index) => {
              return (
                <GridContainer key={skill.label}>
                  <GridItem xs={4} sm={2} md={2}>
                    <h6>{skill.label}</h6>
                  </GridItem>
                  <GridItem xs={8} sm={10} md={10}>
                    <CustomLinearProgress
                      variant="determinate"
                      color={getColorForIndex(index)}
                      value={skill.percentage}
                      className={classes.skillProgress}
                    />
                  </GridItem>
                </GridContainer>
              );
            })}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
