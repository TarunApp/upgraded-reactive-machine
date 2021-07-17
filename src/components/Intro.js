import {Center, Column, Row} from './About'
import {NavLink} from 'react-router-dom'



const Intro = () => {

	return (
		<Center>
		<Column>
			<p style={{fontWeight: "bold", textAlign: 'center', width: "50%"}}>I'm a recent CS grad with experience in Full-Stack JS and Python. I love to work in both environments respectively and have built several <NavLink to="/projects">projects</NavLink>. I love working with a team and building great products.</p>
			 <p style={{fontWeight: "bold", textAlign: 'center', width: "50%"}}>In my spare time I like working with new technologies to build things as well as testing out different products. </p>
			 </Column>
		</Center>	
		)

}

export default Intro