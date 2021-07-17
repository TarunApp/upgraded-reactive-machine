import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const NavBar = styled.div`
margin-top: 100px;
margin-bottom: 50px;
display: flex;
justify-content: center;
align-items: center;

a {
	color: black;
	text-decoration: none;
	margin-right: 10px;
	background: #FF8C42;
	padding: 8px;
	font-family: 'Poppins';
	border-radius: 5px;
	font-weight: bold;
	border: solid;
	border-color: black;
	border-width: 2px;
}

`

const Nav = (props) => {

	return (
		<div>
			<NavBar>

				<NavLink to="/about">About</NavLink>
				<NavLink to="/projects">Projects</NavLink>

			</NavBar>
		</div>
		)

}

export default Nav