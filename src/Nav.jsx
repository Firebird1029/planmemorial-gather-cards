import React from "react";

function Nav() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="/">
					<strong>Gather</strong>
					{/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
				</a>

				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<a className="navbar-item" href="/">
						Home
					</a>

					{/* <a className="navbar-item">Documentation</a>

					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">More</a>

						<div className="navbar-dropdown">
							<a className="navbar-item">About</a>
							<a className="navbar-item">Jobs</a>
							<a className="navbar-item">Contact</a>
							<hr className="navbar-divider" />
							<a className="navbar-item">Report an issue</a>
						</div>
					</div> */}
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a href="/" className="button is-primary">
								<strong>Sign up</strong>
							</a>
							<a href="/" className="button is-light">
								Log in
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
