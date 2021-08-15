import styled from 'styled-components'

const Column = styled.div`
	display: flex;
	flex-direction: column;
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
	justify-content: ${props => props.center ? 'center' : 'space-around'};
	align-items: ${props => props.align ? 'center' : 'none'};
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
	color: #97BEC4;
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
	padding: 10px 10px 26px 10px;
	h2 {
		font-family: "Inter";
		font-size: 30px;
		text-align: center;
		color: black;
	}
	h4 {
		padding: 10 10 10 10;
		margin: 0 5px 0 0;
		font-family: "Inter";
		font-size: 20px;
		text-align: center;
		color: black;
	}
`

const Card = styled.div`
	background: #EBEEFE;
	color: #13293D;
	border-radius: 5px;
	border-width: 1px;
	border-color: #BDBBB0;

	width: 300px;
	padding: 30px;
	margin-right: 10px;
	margin-bottom: 10px;
	h3 {
		font-family: "Inter";
		font-size: 20px;
	}
	p {
		font-size: 17px;
		font-family: "Work Sans";
	}
	a {
		font-family: "Inter";
		font-size: 16px;
		background: #FFE066;
		color: black;
		padding: 6px;
		border-radius: 5px;
		margin-right: 5px;
		text-decoration: none;
		&:hover{
		position: relative;
		bottom: 2px;	
		}
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
	span {
		padding: 0;
		margin: 0;
		p {
		font-family: "Inter";
		font-size: 16px;
		background: #F7A5A1;
		color: black;
		padding: 6px;
		border-radius: 5px;
		display: inline-block;
		margin:0;
		}
	}
`

const LinkButton = styled.a`
	font-family: "Inter";
		color: white;
		font-size: 18px;
		text-decoration: none;
		border: 2px solid #32936F;
		color: #32936F;
		padding: 5px 10px 5px 10px;
		border-radius: 5px;
		margin-right: 10px;

	@media (max-width: 768px) {
		width: 20%;
	}

	&:hover{
		position: relative;
		bottom: 2px;	
	}
`

const ResponsiveRow = styled.div`
	display: flex;
	flex-direction: row;
	padding: 5px;
	margin-top: ${props => props.margintop || '0px'};
`


const Nav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	a {
		text-decoration: none;
		font-family: "Inter";
		font-size: 18px;
		font-weight: bold;
		background: #FFBF00;
		color: black;
		border-radius: 10px;
		padding: 10px;
		margin-right: 10px;
	}

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 5px;
		justify-content: center;
		margin-bottom: 20px;
	}
`

const Select = styled.select`
	border: solid;
	border-width: 2px;
	border-radius: 5px;
	border-color: white;
	background: #B0D7FF;
	font-family: "Work Sans";
	font-size: 15px;
	padding: 5px 0 5px 0;
`

const BlogContent = styled.div`
	background: white;
	padding: 50px;
	h1 {
		font-size: 50px;
		text-align: center;
		font-family: "Inter";
		margin: 0;
		padding-top: 25px;
		padding-bottom: 15px;
	}
	p {
		font-size: 20px;
		word-break: break-all;
		text-align: justify;
	}
	code {
		border-radius: 5px;
		background: #EBEEFE;
		border: 1px solid #D6D7D6;
		padding: 10px;
		display: block;
		margin: 0;
		font-size: 15px;
		white-space:pre-wrap; 
		word-wrap:break-word;
		font-family: 'Roboto Mono';
	}
`

const BlogNav = styled.div`
	a{font-family: "Inter";
		font-size: 20px;
		background: #32936F;
		color: white;
		padding: 6px;
		border-radius: 5px;
		margin-right: 5px;
		text-decoration: none;
		&:hover{
		position: relative;
		bottom: 2px;		
	}}
`


export {Column, Row, MainTitle, Projects, Card, LinkButton, Nav, ResponsiveRow, Select, BlogContent, BlogNav}