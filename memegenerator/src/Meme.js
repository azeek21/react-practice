export default function Meme(_){
	return(
		<main>
		<div className="form">
			<input name="topText" onKeyUp={_.handleTopText} className="meme-text__input1" type="text" />
			<input name="bottomText" onKeyUp={_.handleBottomText} className="meme-text__input2" type="text" />
			<input onClick={_.newMemeImg}  className="submit__button" type="submit" value={_.submitText}/>
		</div>
		<div className="meme-image-container">
			<h4 className="meme-top__text meme-text">{_.meme.topText}</h4>
			<img className="meme__img" src={_.meme.imgLink} alt="" />
			<h4 className="meme-bottom__text meme-text">{_.meme.bottomText}</h4>
		</div>
		</main>
	);
}
