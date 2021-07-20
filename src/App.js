import React, {Fragment} from 'react'
import {Column, Row, MainTitle, Projects, Card, LinkButton, Nav, ResponsiveRow} from './Styles'

function App(){
  return (
      <Fragment>
      <Column>

        <MainTitle>
          <Nav>
          <a href="https://github.com/tarunapp">About</a>
          <a href="https://github.com/tarunapp">Projects</a>
          <a href="https://github.com/tarunapp">Experience</a>
          </Nav>
          <h1>Hello</h1>
          <p>My name is Tarun and I'm a Full-Stack Developer focusing on JavaScript and Node.js.</p>
          <p>I'm always looking forward to working with people to build great things!</p>
          <ResponsiveRow>
          <LinkButton color="#ACC8E5" href="https://github.com/tarunapp">GitHub</LinkButton>
          <LinkButton color="#ACC8E5" href="https://www.linkedin.com/in/tarun-appannagari-97a16a189">LinkedIn</LinkButton>
          </ResponsiveRow>
        </MainTitle>



        <Projects>
          <h2>Projects</h2>
          <Row center>
            <Card>
              <h3>Digital Storytelling Project</h3> 
              <p>Web App that serves as a platform for learning Python.</p>
              <hr/>
              <a href="https://github.com/tarunapp">GitHub</a>
            </Card> 

             <Card>
              <h3>Personal Website</h3> 
              <p>Created personal website containing a blog using MDX and Git Hooks.</p>
              <hr/>
              <a href="https://github.com/tarunapp">GitHub</a>
            </Card> 

            <Card>
              <h3>JobLists</h3> 
              <p>Keep track of your job applications.</p>
              <hr/>
              <a href="https://github.com/tarunapp">GitHub</a>
            </Card> 

            <Card>
              <h3>LiNCE</h3> 
              <p>Developed tools for backend and built front-end components as a research assistant.</p>
              <hr/>
              <a href="https://github.com/tarunapp">GitHub</a>
            </Card> 
          </Row>
        </Projects>

        <Projects>
          <h2>Experience</h2>
          <Row center>
            <Card>
              <h3>Digital Storytelling Project - Development Lead</h3> 
              <hr/>
              <ul>
                <li><p>Worked with the University of Houston Computer Science Department to develop a web app for teaching Python
Programming along with a team of 10 students.</p></li>
              </ul>
            </Card> 

            <Card>
              <h3>Digital Storytelling Project - Development Lead</h3> 
              <hr/>
              <ul>
                <li><p>Worked at NLP-oriented research lab, Ritual at the University of Houston. Reported to & assisted graduate students with
collecting data, providing analytics, and organize textual data, for their NLP Models</p></li>
              </ul>
            </Card> 
          </Row>
        </Projects>

      </Column>
      </Fragment>
    )
}

export default App