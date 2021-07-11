import React from "react";
import { Route, Switch } from "react-router-dom";

// import Home from "../screens/home/Home";
// import Engagement from "../screens/engagement/Engagement";
// import Leadership from "../screens/leadership/Leadership";
// import WorkExperience from "../work/WorkExperience";
import OnePage from "../screens/OnePage/OnePage";

export default function MainContainer() {
  return (
    <Switch>
      <Route path="/">
        <OnePage />
      </Route>
    </Switch>
  );
}

// <Route path="/engagement">
//         <Engagement />
//       </Route>

//       <Route path="/leadership">
//         <Leadership />
//       </Route>

//       <Route path="/workexperience">
//         <WorkExperience />
//       </Route>

//       <Route path="/">
//         <Home />
//       </Route>
