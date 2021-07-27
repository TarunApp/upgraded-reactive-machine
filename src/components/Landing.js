import {Column, Row, Projects, Card} from '../Styles'

const Landing = (props) => {

	return (
		<Column>
<Projects id="projects">
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

        <Projects id="exp">
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
              <h3>RiTUAL Lab - Research Assistant</h3> 
              <hr/>
              <ul>
                <li><p>Worked at NLP-oriented research lab, Ritual at the University of Houston. Reported to & assisted graduate students with
collecting data, providing analytics, and organize textual data, for their NLP Models</p></li>
              </ul>
            </Card> 
          </Row>
        </Projects>
        </Column>
		)

}

export default Landing