import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Column } from "./Styles";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Resources from "./components/Resources";
import Blog from './components/Blog.js'
import Resume from './Res/Resume.js'

import Posts from './Blog/Posts'
import BlogContainer from './Blog/BlogContainer'

function App() {


  return (
    <Router>
      <Column>
      <Switch>
        <Route exact path="/resume" component={Resume} />
          <Route exact path="/" component={() => <div> <Main/> <Landing/> </div>} />
          <Route exact path="/resources" component={() => <> <Main/> <Resources/> </>} /> 
          <Route exact path="/blog" component={() => <> <Main/> <Blog/> </>} /> 
          {Posts.map(item => {
            return <Route key={1} exact path={"/" + item.name} component={BlogContainer(item.content)}/>
          })}
      </Switch>
      </Column>
    </Router>
  );
}

export default App;
