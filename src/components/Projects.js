import React from 'react';
import {Center, Column, Row} from './About'
import styled from 'styled-components'

const StyledCard = styled.div`
	background: white;
	border-radius: 5px;
	font-family: 'Poppins';
	padding: 10px;
	margin-right: 10px;
	width: 250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	p {
		margin-top: -15px;
		text-align: center;
	}

	@media (max-width: 768px) {
		margin-bottom: 10px;
	}
`
const StyledHr = styled.hr`
	border: solid;
	border-width: 1px;
	color: black;
	width: 50%;
	margin-bottom: 15px;
`
const StyledTitle = styled.h4`
	text-decoration: underline;
`

const Projects = (props) => {

	return (
		<Center marginbottom="50px;">
			<Column>
				<Row>
					
					<StyledCard>
						<StyledTitle>Digital Storytelling with Python</StyledTitle>
						<p>Worked with a team of 10 in creating a web app for learning Python. Created detailed 10pg documentation on the app functionalities.</p>
						<StyledHr/>
						<p><strong>Technologies</strong>: JavaScript, MongoDB, EJS, ExpressJS, JSONWebTokens </p>
					</StyledCard>

					<StyledCard>
						<StyledTitle>Personal Website</StyledTitle>
						<p>Created personal website with React. Includes a custom blog component for packages up MDX and serving client-side.</p>
						<StyledHr/>
						<p><strong>Technologies</strong>: JavaScript, ReactJS, Styled Components, MDX</p>
					</StyledCard>

					<StyledCard>
						<StyledTitle>Activity Recognition</StyledTitle>
						Worked in my Data Science course to utilize data from activity sensors to create a Decision Tree Model to predict the activity of Healthy Older People
						<StyledHr/>
						<p><strong>Technologies</strong>: R, Descision Trees, R-Markdown</p>
					</StyledCard>


				</Row>
			</Column>
		</Center>
		)

}


export default Projects