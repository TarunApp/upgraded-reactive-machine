import { useState, useEffect } from 'react'

const Home = (props) => {

	const [quote, SetQuote] = useState({})

	// useEffect(() => {
	// 	fetch('')
	// 	.then(data => data.json())
	// 	.then(x => SetQuote(x))
	// },[])

    return (
        <div className="main-header">
        	<div className="main-landing">
        	<h1>Hello!</h1>
        	<p>Feel free to check out my webpage!</p>
        		<div className="contact box-shadow-m">
        			<h1>Contact</h1>
        			<ul>
        				<li>Email: asdjk@test.com</li>
        			</ul>
        		</div>
        	</div>
        	<div>
        		<h1>Learning Resources</h1>
        		<ul>
        			<li><a href="">FreeCodeCamp</a></li>
        		</ul>
        	</div>
		</div>
    )
}


export default Home