import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

const Nav = (props) => {
	return (

		<nav className="nav">
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/projects'>Projects</NavLink>
		</nav>
	
		)
}



export {Nav}