const Card = ({languages}) => {
	return (
		<div className="card">
			<h1>Card Title</h1>
			<div className="card-flex">
				<div className="card-one">
					<h2>Project Details</h2>
					<p>{languages}</p>
				</div>
				<div className="card-content">
					<a href="https://github.com">GitHub</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
