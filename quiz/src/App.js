import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {nanoid} from "nanoid"

import Questions from "./Questions";
import Answer from "./Answer";
import StartScreen from "./StartScreen";
import Statusbar from "./Statusbar";
import LoadingScreen from "./LoadingScreen";
import Footer from "./Footer"
import { htmlDecode } from "./tools";

import "./normalize.css"
import "./style.css"

const Root = createRoot(document.getElementById('root'));





// if (progress < precentage){
// 	let anonym = async () => {await setTimeout(() => {setProgress(old => old + 1)}, 50)};
// 	anonym();
// 	}










function Simulation(){
	const [state, setState] = React.useState({})


	React.useEffect(() => {
		if (Object.keys(state).length === 0)
		{
		(async () =>{
			const localReq = await localStorage.getItem("state");
			const localData = await JSON.parse(localReq);
			if (localData) setState(localData)
			else{
				const res = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple");
				const data = await res.json();
				const ready = {
					isFinished: false, 
					isAllDone: false,
					questions: data.results.map(question => {
						question.incorrect_answers.splice(Math.floor(Math.random() * 5), 0, htmlDecode(question.correct_answer));
						question.correct_answer = htmlDecode(question.correct_answer);
						question.answers = question.incorrect_answers.map(answer => htmlDecode(answer));
						return {...question, id: nanoid(), answer : ''}
					})
					}
				localStorage.setItem("state", JSON.stringify(ready));
				setState(ready);
				};
		})();
		// document.body.addEventListener("mouseleave", () => {
		// 	// alert("Mouse left page.")
		// 	// Add anything you want to happen when mouse leaves your page
		// })
	};
	}
	, []);

	React.useEffect(() => {
		if (Object.keys(state).length > 0){
			localStorage.setItem("state", JSON.stringify(state));
			const allAnswered = state.questions.every( question => (question.answer.length > 0)) 
			if (allAnswered && !state.isAllDone){
				setState(oldState => {
					return {...oldState, isAllDone: true};
				})
			} else if (state.isAllDone && !allAnswered){
				console.log("you")
				setState(oldState => ({...oldState, isAllDone: false}));
			}
		}
	}, [state])

	function Checked(question_id, answer){

		const question = state.questions.filter(ques => ques.id === question_id)[0];
		if (answer === question.answer) {
			question.answer = '';
		} else {
			question.answer = answer;
		}
		setState(oldState => {
			const questions = oldState.questions.filter((question) =>  question.id !== question_id);
			return {
				...oldState,
				question: [...questions, question],
				isAllDone: false,
				isFinished: false,
			};
		})
	}

	function Evaluate(){
		let correctN = 0;
		if (state.questions.map(question => question.answer === question.correct_answer ? correctN++ : {})){
			setState(oldState => ({...oldState, isFinished : true, all: oldState.questions.length, correctN: correctN}));
		}
	}

	function NextRound(){
		(async () =>{
				const res = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple");
				const data = await res.json();
				const ready = {
					isFinished: false, 
					isAllDone: false,
					questions: data.results.map(question => {
						question.incorrect_answers.splice(Math.floor(Math.random() * 5), 0, htmlDecode(question.correct_answer));
						question.correct_answer = htmlDecode(question.correct_answer);
						question.answers = question.incorrect_answers.map(answer => htmlDecode(answer));
						return {...question, id: nanoid(), answer : ''}
					})
					}
				localStorage.setItem("state", JSON.stringify(ready));
				setState(ready);
		})();
	}

	return (
		<div className="app">
			{Object.keys(state).length === 0 ? <LoadingScreen/> : <Questions showresults={state.isFinished} checked={ !state.isFinished ? Checked : ()=>{}} questions={state.questions} />}
			{state.questions ? <Statusbar
				correct={state.correctN}
				all={state.all}
				handleClick={state.isAllDone && !state.isFinished ? Evaluate : state.isFinished ? NextRound : () => {}}
				available={state.isAllDone} 
				showresults={state.isFinished}
			/> : ''}
			<Footer />
			{/* <button onClick={NextRound} className="button answer--incorrect" type="button">Force Reload</button> */}
			{/* <StartScreen/> */}
		</div>
	);
}



function App(){
	const [start, setStart] = useState(false);

	function Start(){
		setStart(true);
	}
	return (start ? <Simulation/> : <StartScreen handleClick={Start}/>);
}
export {Root, App};