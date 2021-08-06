import {MainTitle, LinkButton, Nav, ResponsiveRow} from '../Styles'
import {Link} from "react-router-dom"

const Main = (props) => {

    document.body.style.background = '#13293D';

	return (
		<MainTitle>
          <Nav>
          <Link to="/">About</Link>
          <a href="#projects">Projects</a>
          <Link to="/resources">Resources</Link>
          </Nav>
          <h1>Hello</h1>
          <p>My name is Tarun and I'm a Full-Stack Developer focusing on JavaScript and Node.js.</p>
          <p>I'm always looking forward to working with people to build great things!</p>
          <p>Check out my projects & work experience below</p>
          <ResponsiveRow margintop="4px">
          <LinkButton href="https://github.com/tarunapp">GitHub</LinkButton>
          <LinkButton href="https://www.linkedin.com/in/tarun-appannagari-97a16a189">LinkedIn</LinkButton>
          {/*<Link to="/tools">CSS Tools</Link>*/}
          </ResponsiveRow>
        </MainTitle>
		)

}

export default Main