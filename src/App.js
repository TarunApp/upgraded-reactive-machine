import './App.css';
import { Nav } from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
    document.body.style.backgroundColor = "#CBC5EA";
    return (
        <Router>
        <div className="App">

      <header>
        <Nav/>
      </header>
        <Switch>
         <Route path='/about' component={Home}/>
         <Route path='/projects' component={Projects} />
        </Switch>

    </div>
      </Router>

    );
}

export default App;