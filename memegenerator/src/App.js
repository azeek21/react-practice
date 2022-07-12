// main imports
import React from "react"
import { StrictMode } from "react"
import {createRoot} from "react-dom/client"

// components
import Header from "./Header"
import Meme from "./Meme"


// styles
import "./normalize.css"
import "./index.css"

const rootElement = document.getElementById('root');
const ROOT = createRoot(rootElement);



// the you don't get it part
// I don't get it too honestly lol
function App(){
	const memesData = {};
	let [meme, setMeme] = React.useState({
		imgLink: "https://i.imgflip.com/2hgfw.jpg",
		topText: '',
		bottomText: '',
		boxCount: 0,
		memesData: {},
	})

	React.useEffect(() => {
		let get = async () => {
			const resp = await fetch('https:api.imgflip.com/get_memes');
			const data = await resp.json();
			setMeme(oldMeme => ({...oldMeme, memesData: data}));
		};
		get();
	}, [])

	function newMemeImg(){
		const randInt = Math.floor(Math.random() * meme.memesData.data.memes.length);
		setMeme((oldMeme) => ({...oldMeme, imgLink: oldMeme.memesData.data.memes[randInt].url, boxCount: oldMeme.memesData.data.memes[randInt].box_count }));
	}

	function updateText(event){
		let text = event.target.value;
		setMeme(oldMeme => ({...oldMeme, [event.target.name]: text}))
	}

	return (
		<div className="main-container">
			<Header 
			LogoTitle="Meme generator"
			HeaderNavText="Project number x"
			LogoImgSrc="./images/logo.svg"
			/>
			<Meme
				submitText="Get a new meme image 🖼"
				handleTopText={updateText}
				handleBottomText={updateText}
				meme={meme}
				newMemeImg={newMemeImg}
			/>
		</div>
	);
}

export {App, ROOT, StrictMode}
  