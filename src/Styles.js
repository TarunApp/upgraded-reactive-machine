import styled from 'styled-components'
// import {colors} from './colors.js'

// Styled Components for Website

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
	padding-bottom: 100px;
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
		font-size: 25px;
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
		margin: 5px;
	}

	@media (max-width: 768px) {
		font-size: 10px;
		padding: 5px;
		justify-content: center;
		margin-bottom: 20px;
		a {

		}
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
`

const HeadingContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	margin-bottom: 20px;

	h1 {
		font-size: 2em;
		text-align: left;
		font-family: "Inter";
		margin: 0;
	}

	p {
		margin: 0px;
		padding-top: 5px;
		padding-bottom: 5px;
		color: #747474;
		font-size: 1.4em;
	}

	@media(max-width: 768px) {
		h1 {
			font-size: 25px;
		}
		p {
			font-size: 15px;
		}
		margin-top: 0px;
	}
`

const BlogText = styled.div`
	p {
		font-size: 1.1em;
	}
`

const BlogContent = styled.div`
	padding: 20px 200px 0 200px;
	// p {
	// 	font-size: 1em;
	// 	word-break: break-all;
	// 	text-align: justify;
	// }

 pre {
 		overflow: scroll;
		border: 2px solid silver;
		border-radius: 5px;
		padding: 5px 10px 5px 10px;
		background: #eaeef2;
	code{
		color: black;
		font-size: 1.2em;
		}
	}

	p {
		font-size: 1.2em;
		line-height: 1.5em;
	code {
		color: black;
		padding: 4px;
		background: #eaeef2;
		border-radius: 5px;
		font-size: 1.2em;
	}
	}

	@media(max-width: 768px) {
		padding: 30px;
	}

`

const Header = styled.hr`
	margin-top: 50px;
	margin-bottom: 50px;
	border: px solid gray;
	width: 50%;
`

const BlogNav = styled.div`

	padding-top: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #f2f2f2;

	a{font-family: "Inter";
		font-size: 1em;
		background: white;
		color: #32936F;
		padding: 6px;
		border: 2px solid #32936F;
		border-radius: 5px;
		margin-right: 5px;
		text-decoration: none;
		&:hover{
		position: relative;
		bottom: 2px;		
	}}
`

const NavContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`




export {Column, Row, MainTitle, Projects, Card, LinkButton, Nav, ResponsiveRow, Select, BlogContent, BlogNav, NavContent, HeadingContent, BlogText, Header}