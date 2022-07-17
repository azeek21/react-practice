export default function Statusbar(props){

	return (
		<div className="statusbar">
			{props.showresults ? <p>You scored {props.correct} / {props.all}</p> : ''}
			<button onClick={props.handleClick} className={`button ${props.available ? 'button--primary' : 'button--unavailable'}`} type="button">
				{props.showresults ? "Next round" : "Check answers"}
			</button>
		</div>
	);
}
