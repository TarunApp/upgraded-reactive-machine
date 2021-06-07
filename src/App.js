import "./App.css";
import { Nav } from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Landing from './components/Landing'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from './Blog/Blog'
import posts from './Blog/Posts'


function App() {
  document.body.style.backgroundColor = "#CBC5EA";
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path="/about" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/" component={Home} />
                  {posts.map((item) => {
          return  <Route exact path={"/" + `${item.name}`} component={item.content}/>
        })} 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
