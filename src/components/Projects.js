import {useState, useEffect} from 'react'
import Card from "./Card";
import "../App.css"

const Projects = (props) => {

	const [input, SetInput] = useState("") //Do not make input with spaces

	let posts = [{name: 'test', languages: 'JS'}, {name: 'asdjk', languages: 'Python'}]

	useEffect(() => {
		fetch('https://api.github.com/users/TarunApp/repos')
		.then(res => res.json())
		.then(data => console.log(data))
	},[])

	let onInput = (e) => {
		SetInput(e.target.value)
	}

				// {input.length != "" ? posts.filter((item) => item.name.includes(input)).map(item => <li key={item.languages}>{item.name}</li>) : posts.map((item) => <li key={item.languages}>{item.name}</li>)}
	return (
		<div className="projects">
			<label htmlFor="search"><h2>Search: {input}</h2></label>
			<input name="search" onChange={onInput} value={input} type="text"/>
			{input == "" ? posts.map(item => <Card name={item.name} languages={item.languages}/>) : posts.filter((item) => item.name.includes(input)).map(item => <Card name={item.name} languages={item.languages}/>)}
		</div>
	);
};

export default Projects;
