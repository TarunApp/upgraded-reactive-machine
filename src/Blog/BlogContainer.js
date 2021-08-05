import {BlogContent} from '../Styles.js'


const BlogContainer = Component => ({...props}) => {

	document.body.style.background = 'white';
	return (
			<BlogContent>
				<Component />
			</BlogContent>
		)	
}



export default BlogContainer