const Card = (props) => {
	return (
		<div className="card">
			<h1>{props.name}</h1>
			<div className="card-flex">
				<div className="card-one">
					<h2>Project Details</h2>
					<p>{props.languages}</p>
				</div>
				<div className="card-content">
					<a href="https://github.com">GitHub</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
