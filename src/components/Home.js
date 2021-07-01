import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Home = (props) => {
 // const [quote, SetQuote] = useState({})

	// useEffect(() => {
	// 	fetch('')
	// 	.then(data => data.json())
	// 	.then(x => SetQuote(x))
	// },[])
	// useEffect(() => {
	// 	props.theme()
	// })

	const Box = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 100px;
		margin-right: 50px;
		margin-left: 50px;


		@media (max-width: 768px) {
			margin-left: 10px;
			margin-right: 10px;
		}
	`
	const Card = styled.div`
	margin-top: 10px;
	margin-right: 5px;	
	height: ${props => props.height ? props.height : '200px'};
	width: ${props => props.width};

	background-color: white;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	`
	const Container = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	`

	const Title = styled.h1`
	font-size: 25px;
	font-family: 'Poppins';
	text-decoration: ${props => props.underline ? 'underline' : 'none'};

		@media (max-width: 768px){
			font-size: 18px;
		}
	`
	const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 10px;
	`

	const ItemList = styled.ul`
	display: inline;

	li {
		display: inline;
	}
	`


    return (
    	<div>
    		<Box>
    		<Card>
    			<TextBox>
    			<h1>Hello World!</h1>
    			<p>Asdjke</p>
    			</TextBox>	

    		</Card>	

    		<ItemList>
    			<li>test</li>
    			<li>test</li>
    			<li>test</li>
    			<li>test</li>
    		</ItemList>

    		</Box>

    	</div>
    )
}


export default Home