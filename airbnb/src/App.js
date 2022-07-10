import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import "./normalize.css"
import EData from "./data"


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


function Card({_}) {
	let comments = _.comments.map(comment => { return (
		<p className="card-img-comment">
			{comment}
		</p>)
	});
	console.log(comments)
	let commentsContainer = (
		<div className="card-img-comments">
			{comments}		
		</div>
	);
	return(
		<div className="card">
			<a href={_.link} target="_blank" className="card-img-container">
			
			{_.comments.length ? commentsContainer : ''}
				
				<img className="card-img" src={_.img} alt="man in blue shirt" />
			</a>

			<div className="card-info-container">
				<div className="card-user-reviews" >
					<img src="./star.svg" alt="" />
					<span className="card-review">{_.stats.rating}</span>
					<span className="card-review-count"> ({_.stats.reviewCount}) </span>
					<span className="middle-dot"></span>
					<span className="card-location">{_.location}</span>
				</div>
				<a className="card-title" href='#'>
					{_.title}
				</a>
				<div className="card-price-container" >
					<span className="card-price">From {_.price}<sup>$</sup></span> / <span className="card-price-unit">{_.priceUnit}</span>
				</div>
			</div>
		</div>
	);
}

function Cards(){
	let cards = (EData.map( _ => <Card
		key={_.id}
		_={_}
	/>));
	return (
		<div className="cards cards-container">
			{cards}
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