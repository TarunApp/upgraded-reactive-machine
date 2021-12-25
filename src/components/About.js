import React from 'react'
import {Buttons, TitleLink, BlogLinks,  Column, Center,Nav } from "../Styles/Layout.js"
import Footer from '../components/Footer.js'




const About = () => {

	return (

		<Column>

			<Nav>
			{/*<TitleLink href="/">TarunApp</TitleLink>*/}
			<Column>

			<TitleLink href="/">TarunApp</TitleLink>

			<Buttons margin="5px">	
							<BlogLinks slab href="/about">About</BlogLinks>
							<BlogLinks slab href="/blog">Blog</BlogLinks>
			</Buttons>

			</Column>

		</Nav>
			
			<Center>
					<Column>
						<h2>About</h2>

						<p style={{"marginTop": 10}}>Hello!</p>

					</Column>
				</Center>

				<Footer/>

			</Column>


		)	
}

export default About