export default function SimpleProgressbar({precentage}){
	let style = {
		width: precentage.toString() + '%',
	}
	return (
		<div className="progressbar">
			<div style={style} className="progressbar__progress">
			</div>
		</div>
	);
}
