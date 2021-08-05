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
	background: #E8F1F2;
	color: #13293D;
	border-radius: 5px;
	border: solid;
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
	}
	a {
		font-family: "Inter";
		font-size: 16px;
		background: #13293D;
		color: #86ADD5;
		padding: 6px;
		border-radius: 5px;
		border: 2px none #294C60;
		margin-right: 5px;
		text-decoration: none;
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
		color: black;
		font-size: 18px;
		text-decoration: none;
		background: ${props => props.color || '#E27365'};
		padding: 5px 10px 5px 10px;
		border-radius: 4px;
		margin-right: 10px;

	@media (max-width: 768px) {
		width: 20%;
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
		font-family: "Inter";
		font-size: 18px;
		background: #F7A5A1;
		color: black;
		border-radius: 20px;
		padding: 10px 20px 10px 20px;
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
		text-align: center;
		font-family: "Inter";
	}
	p {
		font-size: 25px;
	}
	code {
		border-radius: 5px;
		padding: 10px;
		display: block;
		margin: 0;
		font-size: 25px;
		white-space:pre-wrap; 
		word-wrap:break-word;
		font-family: 'Roboto Mono';

	}
`

export {Column, Row, MainTitle, Projects, Card, LinkButton, Nav, ResponsiveRow, Select, BlogContent}