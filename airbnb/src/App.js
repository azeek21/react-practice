import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import "./normalize.css"



const ROOT = document.getElementById("root");







function Header() {
	return (
		<header className="header" >
			<div className="main-container">
				<HeaderNav />
			</div>
		</header>
	);
}

function HeaderNav(){
	return (
		<nav className="header-nav">
			<a className="header-logo" href="#">
				<img className="header-logo__img" src="./logo_airbnb.svg" alt="logo" />
			</a>
		</nav>
	);
}


function GallryColumn(srcs) {
	let col = [];
	for (let src of srcs){
		col.push(<img src={src} alt="" />);
	}

	return (
		<div className="column">
			{col}
		</div>
	);
}

function Gallery() {
	return (
		<div className="gallery">
			 {GallryColumn(['./img1.jpg'])}
			 {GallryColumn(['./img3.png', './img2.png'])}
			 {GallryColumn(['./img5.png', './img4.png'])}
			 {GallryColumn(['./img7.png', './img6.png'])}
			 {GallryColumn(['./img9.png', './img8.png'])}
		</div>
	);
}

function OnlineExperiences(){
	return (
		<div className="main-container">
			<section className="experiences">
				<h2 className="experiences-title">
					online experiences
				</h2>
				<p className="experiences-text">
					Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
				</p>

				<Cards/>
			</section>
		</div>
	);
}


function Card() {
	return (
		<div className="card">
			<div className="card-img-container">
				<div className="card-img-comments">
					<p className="card-img-comment">
						Sold out
					</p>
				</div>
				<img className="card-img" src="./card-img1.png" alt="man in blue shirt" />
			</div>

			<div className="card-info-container">
				<div className="card-user-reviews" >
					<img src="./star.svg" alt="" />
					<span className="card-review">5.0</span>
					<span className="card-review-count"> (6) </span>
					<span className="middle-dot"></span>
					<span className="card-location">USA</span>
				</div>
				<a className="card-title" href="#">
					Life lessons with Katie Zaferes
				</a>
				<div className="card-price-container" >
					<span className="card-price">From $136</span> / <span className="card-price-unit">person</span>
				</div>
			</div>
		</div>
	);
}

function Cards(){
	return (
		<div className="cards cards-container">
			<Card/>
		</div>
	);
}


function APP() {
	return  (
		<div className="page">
			<Header />
			{/* <Gallery/> */}
			<OnlineExperiences/>
		</div>
	);
}

export {APP, ROOT, ReactDom};