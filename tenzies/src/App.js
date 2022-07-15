import React from "react"
import {createRoot} from 'react-dom/client'
import Game from "./Game";

// all styles here
import "./index.css"

// creating root
let rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// some meaningfull comment here
function App(){
    return (
        <div>
            <Game/>
			<a href="#" className="github--link"> <img className="github--img" src="./github.png" alt=""/> </a>
        </div>
    );
}

export {root, App}