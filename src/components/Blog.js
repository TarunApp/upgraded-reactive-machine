import { Column, Row, Projects, Card} from "../Styles";
import Posts from '../Blog/Posts'
import {Link} from 'react-router-dom'


const Blog = (props) => {


	return (
			<Column>
				<Projects>
					<h2>Blog</h2>
					<p style={{ fontSize: "18px", textAlign: "center" }}>
						My writing stuff.
					</p>
					<Row center>
					{/*<Card>
						<h3>First Blog Post</h3>
						<p>Blog Post Content</p>
					</Card>	*/}
					{Posts.map(item => {
						return <Card>
							<h3>{item.name}</h3>
							<Link to={item.name}>{item.name}</Link>
						</Card>
					})}
					</Row>
				</Projects>	

			</Column>
		)


}

export default Blog