import Footer from "./Footer";

export default function StartScreen(props){

	return (
		<div className="start">
			<h1 className="start__title">
			Quizzical
			</h1>
			<p className="start__text">
			Let the party begin !
			</p>
			<button onClick={props.handleClick} className="button start__button button--primary" type="button">Start quiz</button>
			<Footer/>
		</div>
	);
}
