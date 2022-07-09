import React from "react";
import ReactDOM from "react-dom";

// Import components
import Image from "./Image";
import Contacts from "./Contacts"
import Footer from "./Footer";
import About from "./About";
import Interests from "./Interests";
import Info from "./Info";
	
// Import stlyesheets
import "./normalize.css"
import "./index.css"
import "./style.js"

// ROOT
const root = document.getElementById("root");

// MAIN APP

function App() {
	return (
		<div className="card" >
			<Image />
			<Info />
			<Contacts />
			<About />
			<Interests />
			<Footer />
		</div>
	);
};


export {App, root, ReactDOM};