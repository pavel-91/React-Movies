import React from "react";

const Header = () => {

    return(
			<>
				<nav>
					<div className="nav-wrapper wrapper blue accent-4">
						<div className="brand-logo">Movies</div>
						<ul id="nav-mobile" class="right hide-on-med-and-down">
							<li><a href="https://github.com/pavel-91/React-Movies" className="linkHeader">GitHub repository</a></li>
						</ul>
					</div>
				</nav>
			</>
    )
}

export default Header;