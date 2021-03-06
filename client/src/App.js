import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";
import "./assets/scss/material-kit-react.scss?v=1.9.0";
import defaultImage from "./assets/img/open-source.jpg";

function App() {
  const [projects, setProjects] = useState([]);
  function getProjects() {
    return fetch("/api/getProjects").then((response) => response.json());
  }

  useEffect(() => {
    const getData = async () => {
      const fetchedProjects = await getProjects();
      const newProjects = fetchedProjects.map((project) => {
        if (!project.image) {
          project.image = defaultImage;
        }
        return project;
      });
      setProjects(newProjects);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/projects">
            <ProjectsPage projects={projects} />
          </Route>
          <Route exact path="/">
            <ProfilePage projects={projects} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
