import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./container/Home";

const ProjectRoutes = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home {...props} hi="hello" />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
