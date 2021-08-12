import React from "react";
import { Route, Switch } from "react-router-dom";
import AcademicAndSummer from "../components/New Components/AcademicAndSummer/AcademicAndSummer";
import Awards from "../components/New Components/Awards/Awards";
import Landing from "../components/New Components/Landing/Landing";
import Leadership from "../components/New Components/Leadership/Leadership";
import NewResearch from "../components/New Components/Research/NewResearch/NewResearch";
// import Research from "../components/New Components/Research/Research";
import SocialImpact from "../components/New Components/SocialImpact/SocialImpact";

export default function MultiPageContainer() {
  return (
    <Switch>
      <Route path="/education">
        <AcademicAndSummer />
      </Route>

      <Route path="/leadership">
        <Leadership />
      </Route>

      <Route path="/awards">
        <Awards />
      </Route>

      <Route path="/research">
        <NewResearch />
      </Route>

      <Route path="/">
        <Landing />
        <div id="social-impact" className="social" />
        <SocialImpact />
      </Route>
    </Switch>
  );
}
