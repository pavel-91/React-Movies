import React from "react";

const Footer = () => {

    return (
			<>
				<footer>
					<div className="footer-copyright blue lighten-1">
						<div className="container">
							© {new Date().getFullYear()} Copyright Text
							<a className="grey-text text-lighten-4 right" href="https://github.com/pavel-91/React-Movies">GitHub repository</a>
						</div>
					</div>
				</footer>
			</>
    )
}

export default Footer;