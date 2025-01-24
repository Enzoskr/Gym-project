import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Notfound/NotFound";
import Plans from "../pages/plans/Plans";
import Members from "../pages/members/Members";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="members" element={<Members />} />
      <Route path="*" element={<NotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
