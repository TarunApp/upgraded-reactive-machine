import { useState, useEffect } from 'react'

const Home = (props) => {

	const [quote, SetQuote] = useState({})

	useEffect(() => {
		fetch('https://api.quotable.io/random')
		.then(data => data.json())
		.then(x => SetQuote(x))
	},[])

    return (
        <div className="main-header">
			<h1 className="content">{Object.keys(quote).length > 0 ? quote.content + " -" + quote.author : "Loading"}</h1>	
		</div>
    )
}


export default Home