import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Column, 
} from "./Styles";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Resources from "./components/Resources";

function App() {
  return (
    <Router>
      <Column>
      <Main/>
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/resources" component={Resources}/>
        </Switch>
      </Column>
    </Router>
  );
}

export default App;
