import "../App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	NavLink,
} from "react-router-dom";

const Nav = (props) => {
	return (
		<nav className="nav">
			<NavLink className="box-shadow-xxl" to="/about">About</NavLink>
			<NavLink className="box-shadow-xxl" to="/projects">Projects</NavLink>
			<a className="box-shadow-xxl" href="https://github.com/TarunApp" target="_blank">GitHub</a>
			<NavLink className="box-shadow-xxl" to="/blog">Blog</NavLink>
		</nav>
	);
};

export { Nav };
