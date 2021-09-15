import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Column } from "./Styles";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Resources from "./components/Resources";
import Blog from './components/Blog.js'

import Posts from './Blog/Posts'
import BlogContainer from './Blog/BlogContainer'

function App() {

  return (
    <Router>
      <Column>
      <Switch>
          <Route exact path="/" component={() => <div> <Main/> <Landing/></div>} />
          <Route exact path="/resources" component={() => <> <Main/> <Resources/> </>} /> 
          <Route exact path="/blog" component={() => <> <Main/> <Blog/> </>} /> 

        {/* Create routes for each post, move to React Router Nested Links*/}
          {Posts.map(item => {
            return <Route exact path={"/" + item.name} component={BlogContainer({date: item.date, heading: item.data.heading})(item.content) }/>
          })}

      </Switch>
      </Column>
    </Router>
  );
}

export default App;
