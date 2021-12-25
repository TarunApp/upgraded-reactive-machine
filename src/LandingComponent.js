import {React, useEffect} from 'react'
import {Buttons, TitleLink, BlogLinks,  BlogCard,  Column, Center, Row,Nav } from "./Styles/Layout.js"
import {Link} from "react-router-dom";
import Posts from './Blog/Posts.js'
import Footer from './components/Footer.js'

const LandingComponent = () => {

	useEffect(() => {
		document.title = "Home"
	}, [])
	
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
						<h2>Posts</h2>

						<Column margintop="10px">

								{Posts.map((item) => {
									return (
                    <BlogCard blog key={item.data.id}>
                      <time>{item.date}</time> 
                      <Link to={item.name}>{item.data.heading}</Link>
                      <p>{item.data.summary ? item.data.summary : ""}</p>
                    </BlogCard>
                    )
								})}
					</Column>

						<Row margintop="5px">
							<BlogLinks href="/blog">View More -></BlogLinks>
						</Row>

					</Column>
				</Center>

				<Footer/>


			</Column>
		)
}

export default LandingComponent