
const BlogContainer = Component => ({...props}) => {
	return (
		<div>
			<div>
			<Component {...props}/>
			</div>
		</div>
		)	
}



export default BlogContainer