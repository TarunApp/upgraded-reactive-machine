import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Column } from "./Styles";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Resources from "./components/Resources";
import Blog from "./components/Blog.js";
import About from './components/About.js'

import Posts from "./Blog/Posts";
import BlogContainer from "./Blog/BlogContainer";
import LandingComponent from "./LandingComponent.js";

function App() {
  Posts.forEach((item) => {
    console.log(item.data.id);
  });

  return (
    <Router>
      <Column>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                {" "}
                <LandingComponent />{" "}
              </div>
            )}
          />
          <Route
            exact
            path="/main"
            component={() => (
              <div>
                {" "}
                <Main />
                <Landing />{" "}
              </div>
            )}
          />
          <Route
            exact
            path="/resources"
            component={() => (
              <>
                {" "}
                <Main /> <Resources />{" "}
              </>
            )}
          />
          <Route
            exact
            path="/blog"
            component={() => (
              <>
                {" "}
                <Blog />{" "}
              </>
            )}
          />

          <Route
            exact
            path="/about"
            component={() => (
              <>
                {" "}
                <About />{" "}
              </>
            )}
          />


          {/* Create routes for each post, move to React Router Nested Links*/}
          {Posts.map((item) => {
            return (
              <Route
                key={item.data.id}
                exact
                path={"/" + item.name}
                component={BlogContainer({
                  date: item.date,
                  heading: item.data.heading,
                  summary: item.data.summary,
                  id: item.data.id,
                })(item.content)}
              />
            );
          })}

        </Switch>
      </Column>
    </Router>
  );
}

export default App;
