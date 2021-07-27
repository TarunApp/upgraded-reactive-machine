import {Card} from '../Styles'


const ResLink = (props) => {

	return (
		<Card>
			<h3>{props.title}</h3>
					<p>{props.content}</p>	
					<hr />
					<a href={props.link}>Link</a>
					<span><p>{props.type}</p></span>
		</Card>
		)

}

export default ResLink
