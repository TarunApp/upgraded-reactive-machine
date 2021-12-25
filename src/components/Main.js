import {NavContent, MainTitle, LinkButton, Nav, ResponsiveRow} from '../Styles'
import {Link} from 'react-router-dom'

// Main Landing Page

const Main = (props) => {

    document.body.style.background = '#13293D';

	return (
		<MainTitle>
          <Nav>

          <NavContent>
          <Link to="/">About</Link>
          {/*<a href="#projects">Projects</a>*/}
          <Link to="/resources">Resources</Link>
          <Link to="/blog">Blog</Link>
          </NavContent>

          </Nav>
          <h1>Hello</h1>
          <p>My name is Tarun, and I'm a Full-Stack developer with experience in Python and Node.js</p>
          <p>What I'm learning: TypeScript, GraphQL, Front-End Design, Writing, Elbow Jumpshots</p>
          <ResponsiveRow margintop="4px">
          <LinkButton href="https://github.com/tarunapp">GitHub</LinkButton>
          <LinkButton href="https://www.linkedin.com/in/tarun-appannagari-97a16a189">LinkedIn</LinkButton>
          {/*<Link to="/tools">CSS Tools</Link>*/}
          </ResponsiveRow>
        </MainTitle>
		)

}

export default Main