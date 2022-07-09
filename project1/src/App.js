// Better do all importing linking and others here

// Main imports
import ReactDOM from "react-dom";
import React from "react";
import "./index.css"
import "./style.js";

// Components
import Header from "./Header";
import MainContent from "./Main";
import Footer from "./Footer";

// ROOT
const rootElement = document.body;

// Main app
function App() {
	return(
		<div>
			<Header/>
			<MainContent />
			{/* <Footer /> */}
		</div>
	);
}

export {ReactDOM, React, App, rootElement};