export default function Answer(props){

	const className = `question__answer answer answer--${props.classprefix}`;
	const id = props.question_id;
	const hadnler = (event) => {
		props.handleClick(id, props.answer);
	}
	return (
		<p onClick={hadnler} className={className} value={props.answer}> {props.answer}</p>
	);
}
