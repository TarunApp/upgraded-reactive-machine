import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Landing = styled.div`
	font-family: 'Poppins';
	width: 80%;
	height: 200px;
`

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: ${props => props.margintop || "none"};
	margin-bottom: ${props => props.marginbottom || "none"};

	@media (max-width: 768px) {

	}
	p {
		font-family: 'Poppins';
	}
`

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;


`

const Row = styled.div`
	padding-top: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: ${props => props.margintop || 'none'};
	@media (max-width: 768px) {
		flex-direction: ${props => props.row || 'column'};

			
	}
`

const Title = styled.h2`
	font-size: 25px;
	font-weight: bold;
	text-align: center;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`

const StyledLinks = styled.div`
	a {
		color: black;
		text-decoration: none;
		background: white;
		border: solid;
		border-color: black;
		border-width: 2px;
	border-radius: 5px;
	padding-right: 10px;
	padding-left: 10px;
	padding-top: 5px;
	padding-bottom: 5px;
	margin-right: 7px;
	font-weight: bold;

	@media (max-width: 768px) {
		margin-bottom: 5px;
	}
	}
`

const About = (props) => {

	let e = ['Full-Stack Web Developer', 'Python & JS Enthusiast', 'Volunteer', 'Teacher', 'Learner']
	const [skills, SetSkills] = useState(e[0])

	const getSkills = () => {
		let r = Math.floor(Math.random() * 5)
		SetSkills(e[r])
	}

	useEffect(() => {

		const interval = setInterval(() => {
			getSkills()
		}, 5000)
		return() => clearInterval(interval)
	},[])

	return (
			
			<Center margintop="10px;" marginbottom="50px;">
				<Landing>
					<Column>
						<h1>Hello, I'm Tarun.</h1>
						<Title>I am a <u>{skills}</u></Title>
						<Row row='row'> 
							<StyledLinks>
								<NavLink to="/about"> About </NavLink>
							</StyledLinks>
							<StyledLinks>
								<NavLink to="/projects"> Projects</NavLink>
							</StyledLinks>
						 </Row>
					</Column>	
				</Landing>
			</Center>

		)

}


export {About, Column, Row, Center}