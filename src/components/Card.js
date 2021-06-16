const Card = (props) => {
	return (
		<div className="card box-shadow-m">
			<h1 >{props.name}</h1>
			<div className="card-flex">
				<div className="card-one">
					<h2 className="card-tag">Project Details</h2>
					<ul style={{display: 'inline'}}>
						<li className="lang">{props.languages}</li>
					</ul>
				</div>
				<div className="card-content">
					<a href="https://github.com">GitHub</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
