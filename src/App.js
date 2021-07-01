import "./App.css";
import {useState} from 'react'
import { Nav } from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Landing from './components/Landing'
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Blog from './Blog/Blog'
import posts from './Blog/Posts'
import BlogContainer from './Blog/BlogContainer'
import Resume from './components/Resume'

function App() {

  const [color, setColor] = useState('#0892A5')
  document.body.style.backgroundColor = color
  let routeid = 0

  const resprop = (e) => {
    let val = e.target.name    
    console.log(val)
    if(val == 'resume'){
      setColor('#E0D0C1')
    }else{
      setColor('#0892A5')
    }
  }

  const theme = () => {
    if(document.body.style.backgroundColor != '#0892A5'){
      document.body.style.backgroundColor = '#0892A5'
    }
  }

  return (
    <Router>
      <div className="App">
      <header>
        <Nav resprop={resprop} />
      </header>
      <Switch>
          <Route exact path="/resume" render={() => <Resume color={color}/>} />
          <Route exact path="/about" render={() => <Home theme={theme}/> } />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/" component={Home} />
        {posts.map((item) => {
          routeid = routeid + 1
          return  <Route key={routeid} exact path={"/" + `${item.name}`} component={BlogContainer(item.content)} />
        })} 
          <Route render={() => <Redirect to="/" />} />
       </Switch> 
      </div>
    </Router>
  );
}

export default App;
