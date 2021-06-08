import '../Blog.css'

const BlogContainer = Component => ({...props}) => {
	return (
		<div className="blog main-landing margin-top-xl">
			<div>
			<Component {...props}/>
			</div>
		</div>
		)	
}



export default BlogContainer