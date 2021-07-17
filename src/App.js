import React from 'react'
import Nav from './components/Nav'
import Projects from './components/Projects'
import {About} from './components/About'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import styled from 'styled-components'

function App(){

  //Wrap up in component
  document.body.style.backgroundColor = "#FFCDBC";
  document.body.style.margin = 0;
  document.body.style.padding = 0;


  const CenterWrap = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  `

  return (
    <>
    <Router>
      
    <header>

    </header>

    <About/>

    <Switch>
     <Route exact path="/projects" component={Projects} />
     <Route render={() => <Redirect to="/about"/> } />
    </Switch>

    </Router>
    </>
    )

}

export default App