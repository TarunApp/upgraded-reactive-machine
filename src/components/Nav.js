import "../App.css";
import {
	NavLink,
} from "react-router-dom";

const Nav = ({resprop}) => {
	return (
		<nav className="nav">
			<NavLink onClick={resprop}  name="about" className="box-shadow-xxl" to="/about">About</NavLink>
			<NavLink  name="projects" className="box-shadow-xxl" to="/projects">Projects</NavLink>
			<a className="box-shadow-xxl" href="https://github.com/TarunApp" target="_blank" rel="noreferrer">GitHub</a>
			<NavLink  name="blog" className="box-shadow-xxl" to="/blog">Blog</NavLink>
			<NavLink onClick={resprop}  name="resume" className="box-shadow-xxl" to="/resume">Resume</NavLink>
		</nav>
	);
};

export { Nav };
