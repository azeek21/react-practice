export default function Header(_) {
	return (
		<header className="header">
			<div className="inner-container">
				<nav className="header-nav">
					<a className="header-nav__link" href="#">
						<img className="header-nav__logo" src={_.LogoImgSrc} alt="logo" />
						{_.LogoTitle}
					</a>
					<a className="header-nav-side-link" href="#">
						{_.HeaderNavText}
					</a>
				</nav>
			</div>
		</header>
	);
}