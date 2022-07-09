export default function Header() {
	return (
		<header>
			<a className="header-logo-container" href="#">
				<LogoImage/>
				ReactFacts
			</a>
			<HeaderNav/>
		</header>
	);
}

function LogoImage(){
	return (
		<img className="logo-image"  src="./logo192.png" alt="a mooon!" />
	);
}

function HeaderNav() {
	return (
		<nav className="header-nav" >
		<ul>
			<a href="#">React Course - Project 1</a>
		</ul>
		</nav>
	);
}
