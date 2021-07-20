import styled from 'styled-components'

const Column = styled.div`
	display: flex;
	flex-direction: column;
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: ${props => props.center ? 'center' : 'none'};
	@media (max-width: 768px) {
		flex-direction: column;
	}
	padding: 5px;
`


const MainTitle = styled.div`
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	h1 {
		font-family: 'Inter';
		font-size: 50px;
		padding: 0px;
		margin: 0 0 5px 0 ;
	}
	p {
		padding: 0;
		margin: 0;
		font-size: 20px;
		line-height: 1.5em;
	}
`

const Projects = styled.div`
	background: ${props => props.color || 'white'};
	padding: 10px 10px 20px 10px;
	h2 {
		font-family: "Inter";
		font-size: 30px;
		text-align: center;
		color: black;
	}
`

const Card = styled.div`
	background: #D2D7DF;
	border-radius: 5px;
	border-width: 2px;
	border: solid;
	border-color: #BDBBB0;

	width: 500px;
	padding: 20px;
	margin-right: 10px;
	h3 {
		font-family: "Inter";
		font-size: 20px;
	}
	a {
		font-family: "Inter";
		background: #353535;
		color: white;
		padding: 5px;
		border-radius: 5px;
		border: 2px solid #8A897C;
	}
	hr {
		color: black;
		border-bottom: 1px solid gray;
		margin-bottom: 20px;
	}

	@media (max-width: 768px) {
		margin-bottom: 10px;
		width: 300px;
	}
	
`

const LinkButton = styled.a`
	font-family: "Inter";
		color: black;
		background: ${props => props.color || '#353535'};
		padding: 5px 10px 5px 10px;
		border-radius: 5px;
		border: 2px solid black;
		margin-right: 5px;
`

const Nav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	a {
		font-family: "Inter";
		font-size: 15px;
		background: black;
		color: white;
		border-radius: 20px;
		padding: 10px 20px 10px 20px;
		margin-right: 10px;
		border: 2px solid #99B2DD;
	}
`

export {Column, Row, MainTitle, Projects, Card, LinkButton, Nav}