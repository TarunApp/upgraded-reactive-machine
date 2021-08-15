import {BlogContent, BlogNav, Column} from '../Styles.js'
import {Link} from 'react-router-dom'

const BlogContainer = Component => ({...props}) => {

	document.title = 'Blog'
	document.body.style.background = 'white';

	return (
			<BlogContent>
				<Column>
				<BlogNav>
					<Link to="/blog">Back to Blog</Link>	
				</BlogNav>	
				<Component />
				</Column>
			</BlogContent>
		)	
}



export default BlogContainer