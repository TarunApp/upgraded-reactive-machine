import styled from 'styled-components'


const BlogCard = styled.div`
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
	a {
		color: black;
		text-decoration: none;
		border-radius: 4px;

		&:hover{
			padding: 7px;
			background: #D2D5DD;
			text-decoration: underline;
		}
	}
	p {
		font-size: 17px;
		font-family: "Work Sans";
	}
	time {
		font-size: 17px;
		font-family: "Work Sans";
		color: #868D98;
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

export {BlogCard}