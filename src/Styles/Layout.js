import styled from 'styled-components';
import {colors} from '../colors.js'


const Column = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		font-family: "Inter";
	}
	margin-top: ${props => props.margintop ? props.margintop : "auto"};
	margin-bottom: ${props => props.margindown ? props.marginbottom : "auto"};
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	@media (max-width: 768px) {
		flex-direction: ${props => props.row ? 'column' : 'row'};
	}
	margin-top: ${props => props.margintop ? props.margintop : "auto"};
	margin-bottom: ${props => props.marginbottom ? props.marginbottom : "auto"};
`

const Center = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 0 50px 0 50px;
	margin: 20px;
	h1 {
		color: ${colors.heading};
		font-size: 3em;
		font-family: "Inter";
		margin: 0px;
		padding: 5px;
	}
	p {
		color: ${colors.head};
		padding: 5px;
		margin:0;
		font-size: 20px;
	}
	h2 {
		color: ${colors.heading};
		font-family: "Inter";
		font-size: 2em;
		margin: 0px;
		padding: 0px;
	}

	@media (max-width: 768px) {
		p {
			font-size: 18px;
		}
		margin: 0;
		margin-bottom: 20px;
	}
`



const Nav = styled.div`
	// background: ${colors.background2};
	// background: linear-gradient(#e66465, #9198e5);
    // background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
	border-bottom: .5px solid silver;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 20px;
	padding: 20px 0px 10px 0px;
	p {
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "Inter";
		font-size: 25px;
		color: ${colors.background2};
		border-radius: 2px;
	}
`

const NavMenu = styled.div`
	display: ${props => props.show ? props.show : 'none'};
	overflow: hidden;
	background: white;
	border-radius: 10px;
	padding: 15px;

	&:active {
		button {
			background: blue;
		}
	}
`


const NavButton = styled.a`
	text-decoration: none;
	padding: 7px 10px 7px 10px;
	// background: ${props => props.color ? colors.paragraph : colors.tertiary};
	// color: ${props => props.color ? colors.background2 : "none"};
	// color: ${colors.tertiary};

	// color: #79A9D1;
	// background: ${colors.background2};

	// color: #094067;
	// color: ${colors.tertiary};
	// background: ${props => props.nobackground ? "none" : "#094067"};
	color: ${props => props.nobackground ? "#094067" : "white"};
	font-family: "Inter";
	font-size: ${props => props.font ? props.font : "17px"};
	border-radius: 7px;
	margin-right: 5px;
	&:hover{
		text-decoration: underline;
	}

`


const BlogLinks = styled.a`
	text-decoration: none;
	padding: 7px 10px 7px 10px;
	border: 2px;
	border-radius: 2px;

	font-family: ${props => props.slab ? "Roboto Slab" : "Inter"};
	font-weight: bold;
	color: black;

	margin-right: 5px;

	&:hover {
		background: ${props => props.slab ? "none" : "#D7E0EA"};
		color: black;
		text-decoration: underline;
	}
}
`



const Links = styled.a`
	text-decoration: none;
	padding: 5px 10px 5px 10px;
	border: 2px solid ${colors.background2};
	color: ${colors.tertiary};
	font-family: "Inter";
	font-size: 1.2em;
	border-radius: 5px;
	margin: 5px 5px 5px 5px;	
	display: block;

	&:hover{
		background: ${colors.background2};
		color: ${colors.tertiary};
	}
`

const BlogCard = styled.div`
	padding: ${props => props.blog ? 0 : "20px"};
	width: ${props => props.blog ? null : "300px"};
	background: ${props => props.blog ? "" : "#DBE6F2"};

	border: ${props => props.blog ? "" : "solid"};
	margin-top: 15px;
	margin-bottom: 10px;

	display: flex;
	flex-direction: column;
	time {
		// color: #A9B4C2;
		color: #43617F;
		font-family: "Work Sans";
	}	
	a {
		font-family: "Inter";
		text-decoration: none;
		color: black;
		margin: 0;
		padding-top: 10px;
		font-size: 20px;
		text-align: left;
	}
	h2 {
		margin: 0;
		padding-top: 10px;
		font-size: 20px;
		text-align: left;
	}
	p {
		color: ${colors.background2};
		padding: 10px 0px 0px 0px;
		font-size: 17px;
		line-height: 1.5em;
	}
	margin-right: 10px;
	a {
		margin: 0;
		display: block;
		
	}

	@media (max-width: 768px){
		width: 250px;
		margin-right: 0;
		margin-top: -5px;
		margin-bottom: 5px;
		height: 150px;
	}

	transition: 0.2s;

	&:hover {
		a {
			text-decoration: underline;
		}
	}
`

const ButtonLink = styled.a`
	font-family: "Inter";
	font-size: 17px;
	// border: 2px solid;
	// padding: 2px 12px 2px 12px;
	border-radius: 20px;
	color: #094067;
`

const BlogButton = styled.a`
	display: block;
	font-family: "Inter";
	font-size: 16px;
	padding: 4px 8px 4px 8px;
	text-decoration: none;
	color: #a3cef1;
	background: #274c77;
	border-radius: 5px;


	&:hover{
		text-decoration: underline;
	}	

	@media(max-width: 768px){
		display: none;
		margin: 0;
	}
`

const TitleLink = styled.a`
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Inter";
	font-size: 25px;
	color: ${colors.background2};
	border-radius: 2px;	
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`

const CenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: ${props => props.margin ? props.margin : 'none'};
`

const FooterLink = styled.a`
	padding: 5px 10px 5px 10px;
	font-family: "Inter";
	font-size: 18px;

	background: #25283D;
	color: #D5D7D5;

	border-radius: 5px;

	text-decoration: none;

	&:hover{
		text-decoration: underline;
	}
`

const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;	
`

export {Column, Row, Center, Nav, NavButton, Links, BlogCard, ButtonLink, BlogLinks, BlogButton, NavMenu, TitleLink, CenterDiv, FooterLink, Buttons}