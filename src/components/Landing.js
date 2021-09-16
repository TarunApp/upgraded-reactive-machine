import {Column, Row, Projects, Card} from '../Styles'

const Landing = (props) => {

  document.title = "About"

	return (
		<Column>
<Projects id="projects">
          <h2>Projects</h2>

          <Row center>
            <Card>
              <h3>Digital Storytelling Project</h3> 
              <p>Web App that serves as a platform for learning Python. Built with HTML, CSS, MongoDB, & Node.js</p>
              <hr/>
              <a href="https://github.com/tarunapp">GitHub</a>
            </Card> 

             <Card>
              <h3>Personal Website</h3> 
              <p>Personal Website. Built with React.js, MDX, Styled Components, Git Hooks.</p>
              <hr/>
              <a href="https://github.com/tarunapp">GitHub</a>
            </Card> 

            <Card>
              <h3>LiNCE</h3> 
              <p>Website for comparing NLP models within Code-Switching domain. Using Flask I helped develop the backend and built front-end components as a research assistant.</p>
              <hr/>
              <a href="https://github.com/tarunapp">GitHub</a>
            </Card> 

            <Card>
              <h3>JobApps</h3> 
              <p> Web App for managing Job Applications. Created using React.js, MongoDB, with the Node.js environment. 
              </p>
              <hr/>
              <a href="#projects">Launching Soon!</a>
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
                <li><p>Developed a Web App for helping students learn Python. Developed front-end and back-end using HTML, CSS and Node.js. </p></li>
              </ul>
            </Card> 

            <Card>
              <h3>RiTUAL Lab - Research Assistant</h3> 
              <hr/>
              <ul>
                <li><p>Worked at NLP-oriented research lab, Ritual at the University of Houston. Reported to & assisted graduate students with
collecting data, providing analytics, and organize textual data, for their NLP Models. Contributed to LiNCE website.</p></li>
              </ul>
            </Card> 
          </Row>
        </Projects>
        </Column>
		)

}

export default Landing