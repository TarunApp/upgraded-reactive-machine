import {useState, useEffect} from 'react'
import Card from "./Card";

const Projects = (props) => {

	const [input, SetInput] = useState(" ")

	let posts = [{name: 'test', languages: 'JS'}, {name: 'asdjk', languages: 'Python'}]

	useEffect(() => {
		// 
	},[])

	let onInput = (e) => {
		SetInput(e.target.value)
	}

	return (
		<div className="projects">
			<input onChange={onInput} value={input} type="text"/>
			<p>{input}</p>
			<ul>
			<h1>CONDITIONAL RENDERING ROCKS!!!!!!</h1>
				{input.length > 0 ? posts.filter((item) => item.name.includes(input)).map(item => <li>{item.name}</li>) : posts.map((item) => <li>{item.name}</li>)}
			</ul>
		</div>
	);
};

export default Projects;
