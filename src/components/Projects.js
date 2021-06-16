import {useState, useEffect} from 'react'
import Card from "./Card";
import "../App.css"

const Projects = (props) => {

	const [input, SetInput] = useState("") //Do not make input with spaces
	const [projects, SetProject] = useState([])
	let posts = [{name: 'test', languages: 'JS'}, {name: 'asdjk', languages: 'Python'}]

	let p = []
	useEffect(() => {
		fetch('https://api.github.com/users/TarunApp/repos')
		.then(res => res.json())
		.then(data => {console.log(data)
			SetProject(data)
		})
	},[])

	let onInput = (e) => {
		SetInput(e.target.value)
	}

				// {input.length != "" ? posts.filter((item) => item.name.includes(input)).map(item => <li key={item.languages}>{item.name}</li>) : posts.map((item) => <li key={item.languages}>{item.name}</li>)}
	return (
		<div className="projects">
			<label htmlFor="search"><h2>Search: {input}</h2></label>
			<input className="search" name="search" onChange={onInput} value={input} type="text"/>
			{projects.length > 0 ? input == "" ? projects.map(item => <Card name={item.name} languages={item.language}/>) : projects.filter((item) => item.name.includes(input)).map(item => <Card name={item.name} languages={item.language}/>) : <p>loading</p>}
		</div>
	);
};

export default Projects;
