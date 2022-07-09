function SocialTwitter() {
	return (
	<a className="socials-item" href="#">
		<img className="social-img" src="./twitter_icon.svg" alt=""/>
	</a>
	);
}

function SocialFacebook() {
	return(
	<a className="socials-item" href="#">
		<img className="social-img" src="./facebook_icon.svg" alt="" />
	</a>
	);
}

function SocialInstagram() {
	return (
	<a className="socials-item" href="#">
		<img className="social-img" src="./instagram_icon.svg" alt="" />
	</a>
	);
}

function SocialGithub() {
	return (
	<a className="socials-item" href="#">
		<img className="social-img" src="./github_icon.svg" alt="" />
	</a>
	);
}

export default function Footer() {
	return (
		<footer className="footer socials-container">
			<SocialTwitter/>
			<SocialFacebook/>
			<SocialInstagram/>
			<SocialGithub/>
		</footer>
	);
}