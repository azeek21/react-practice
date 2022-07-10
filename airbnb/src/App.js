import React from "react"
import ReactDom from "react-dom"


import "./index.css"
import "./normalize.css"

import Header from "./Header"
import Gallery from "./Gallery"
import OnlineExperiences from "./Marketplace"


const ROOT = document.getElementById("root");



function APP() {
	return  (
		<div className="page">
			<Header />
			<Gallery/>
			<OnlineExperiences/>
		</div>
	);
}

export {APP, ROOT, ReactDom};