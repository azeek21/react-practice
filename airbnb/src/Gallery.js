export default function Gallery() {
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
