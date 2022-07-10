function Contact() {
	return (
		<div className="card">
			<div className="card-img-container">
				<div className="card-img-comments">
					<p className="card-img-comment">
						Sold out
					</p>
				</div>
				<img className="card-img" src="./card-img1.png" alt="man in blue shirt" />
			</div>

			<div className="card-info-container">
				<div className="card-user-reviews" >
					<img src="./star.svg" alt="" />
					<span className="card-review">5.0</span>
					<span className="card-review-count"> (6) </span>
					<span className="middle-dot"></span>
					<span className="card-location">USA</span>
				</div>
				<a className="card-title" href="#">
					Life lessons with Katie Zaferes
				</a>
				<div className="card-price-container" >
					<span className="card-price">From $136</span> / <span className="card-price-unit">person</span>
				</div>
			</div>
		</div>
	);
}