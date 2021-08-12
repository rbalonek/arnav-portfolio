import "./App.css";
import Layout from "./layout/Layout.jsx";
import { Route, Switch } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import MultiPageContainer from "./containers/MultiPageContainer";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <MultiPageContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
