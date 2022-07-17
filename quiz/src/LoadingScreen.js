export default function LoadingScreen(){
	return (
		<div className="loading">
			<div className="loading__container" >
				<span className="loading__animated animated--1" ></span>
				<span className="loading__animated middle middle-1"></span>
				<span className="loading__animated animated--2" ></span>
				<span className="loading__animated middle middle-2"></span>
				<span className="loading__animated animated--3" ></span>
				<span className="loading__animated middle middle-3"></span>
				<span className="loading__animated animated--4" ></span>
				<span className="loading__animated middle middle-4"></span>
			</div>
			<h1 className="loading__text">Loading . . .</h1>
		</div>
	);
}
