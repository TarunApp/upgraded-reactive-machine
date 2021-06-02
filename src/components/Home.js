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
        	<h1>Hello!</h1>
		</div>
    )
}


export default Home