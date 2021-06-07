import posts from './Posts'
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom";


const Blog = () => {

	return (
		<div>
      <h1>My Blog</h1>
		<ul>
        {posts.map((item) => {
          return <li><NavLink to={"/" + `${item.name}`}>{item.name}</NavLink></li>
        })} 
        <li><NavLink to="/">Home</NavLink></li>
      </ul>
      </div>
			)
}

export default Blog