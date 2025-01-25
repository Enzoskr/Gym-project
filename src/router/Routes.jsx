import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Notfound/NotFound";
import Plans from "../pages/plans/Plans";
import Members from "../pages/members/Members";
import CreateMembers from "../pages/createmembers/CreateMembers";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="members" element={<Members />} />
      <Route path="members/create" element={<CreateMembers />} />
      <Route path="*" element={<NotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
