import React from "react";
import {nanoid} from "nanoid"
import Confetti from "react-confetti/index";
import Die from "./Die";

function Game(){

	// Initializing values. Read from local storage or reinitialize all new state if local not exists.
    const [state, setState] = React.useState(() => {
		console.log(localStorage.getItem("gameCache"));
		const state = JSON.parse(localStorage.getItem("gameCache"));
		return  state ? state : {
			list: [...Array(10)].map(() => Math.ceil(Math.random() * 6)),
			frozenIndexes: [], gameOver: false,
			rolls: 0,
			best: 0,
		}
	});

	// save game simulation to browser cache and check for win every time state changes
    React.useEffect(() => {
		localStorage.setItem("gameCache", JSON.stringify(state));
        gameOver();
        return () => {};
    }, [state])


	// generates random values for dice and updates state respectively to frozen dice.
	function Shuffle(){
        if (gameOver()) RestartGame();
        setState(oldState => {
            const newList = oldState.list.map((num, index) => {return oldState.frozenIndexes.includes(index) ? num : Math.ceil(Math.random() * 6)});
            return {...oldState, list: newList, rolls: oldState.rolls + 1}; 
        })
    }

	// restarts game without deleting game statistics (best). Used after each win
    function RestartGame(){
        setState( oldState => {
			return {
				...oldState,
				rolls: 0,
				gameOver: false,
				frozenIndexes: [],
				list: [...Array(10)].map(n => Math.ceil(Math.random() * 6))
			}
		})
    }

	// toggles freeze state on dice
    function Freeze(index){
		if (gameOver()) return;
        setState(oldState => {
            if (oldState.frozenIndexes.includes(index)){
                oldState.frozenIndexes.splice(oldState.frozenIndexes.indexOf(index), 1);
                return {...oldState}; 
            }
            else {
                    oldState.frozenIndexes.push(index);
                    return {...oldState};
            }
        });
    };

	// cheks and returns true or false respectively to if it's a win or not
    function gameOver(){
		if (state.frozenIndexes.length !== 10) return false;
        if (state.gameOver) return true;
        if (state.list.every(n => n === state.list[0])){
            setState(oldState => ({...oldState,
				gameOver: !oldState.gameOver,
				best: oldState.best ? oldState.best > oldState.rolls ? oldState.rolls : oldState.best : oldState.rolls,
			}))
        };
    }

	// resets all the game cache and reloads the game.
	function superReset(){
		if (!window.confirm("You are about to clear all your game statistics. This action can't be undone. Are you sure ?")) return;
		localStorage.setItem("gameCache",JSON.stringify(NaN));
		window.location.reload();
	}

	// mapping creating the dice to display
	const dices = state.list.map((n, index) => <Die key={nanoid()} n={n} on={state.frozenIndexes.includes(index)} freeze={() => {Freeze(index)}} />)
	
    return (
        <div className="game-container">
			{state.gameOver ? <Confetti/> : ''}
			<h5 className="stats" >
				<p>Rolls: {state.rolls}</p>
				<p className="best" >Best: {state.best ? state.best : "X"}</p>
			</h5>
            <h1 className="game-title">Tenzies</h1>
            <p className="game-text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            
            <div className="dice-container">
                {dices}
            </div>
            <button onClick={Shuffle} className="roll" type="">{state.gameOver ? "Restart game" : "R o l l"}</button>
			<button onClick={() => {superReset()}} className="trashcan-container" > <img className="trashcan-img" src="./trashcan.svg" alt=""/> </button>
        </div>
    );
}

export default Game;