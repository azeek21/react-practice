import {nanoid} from "nanoid"
import Answer from "./Answer";
import {htmlDecode} from "./tools"
import SimpleProgressbar from "./SimpleProgressbar";


function Question(props){
	const answers = props.question.answers.map((answer) => {
		let s = '';
		if (props.showresults &&  answer === props.question.correct_answer) s = "correct";
		else if (props.showresults && props.question.answer === answer && answer !== props.question.correct_answer) s = "incorrect";
		else if (props.showresults) s = 'disabled';
		else if (!props.showresults && props.question.answer === answer) s = 'selected';
	return (<Answer
		handleClick={props.checked}
		question_id={props.question.id}
		key={nanoid()}
		answer={answer}
		classprefix={s} />)
	}
	)
	return (
		<div className="question">
			<h2 className="question__text">
				{htmlDecode(props.question.question)}
			</h2>
			<div className="question__answers answers">
				{answers}
			</div>
			<SimpleProgressbar precentage={props.question.answer.length > 0 ? 100 : 0}/>
		</div>
	);
}

export default function Questions(props){
	const questions = props.questions.map(question => {
		return <Question showresults={props.showresults} checked={props.checked} key={nanoid()} question={question}/>
	})

	return(
		<div className="questions">
			{questions}
		</div>
	);
}
