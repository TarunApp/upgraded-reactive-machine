import posts from './Posts'
import '../App.css'
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom";


const Blog = () => {

	return (
    <div>
    <div>
      <h1>Blog</h1>
      <p>Writing Stuffs</p>
      <ul>
        {posts.map((item) => {
          return <li><NavLink to={"/" + `${item.name}`}>{item.name}</NavLink></li>
        })} 
      </ul>
    
    </div>
	  </div>
			)
}

export default Blog