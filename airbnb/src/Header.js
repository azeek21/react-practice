export default function Header() {
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