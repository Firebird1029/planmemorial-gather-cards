import React from "react";
import bg1 from "./backgrounds/1.jpg";

function Designer() {
	return (
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column is-8 has-text-centered">
						<div style={{ position: "relative", zIndex: 1 }}>
							<img src={bg1} alt="Background 1" />
							<div
								className="container"
								style={{
									position: "absolute",
									top: 0,
									zIndex: 3,
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgba(255, 255, 255, 0.5)",
								}}
							>
								hi
							</div>
						</div>
					</div>
					<div className="column is-4 has-text-centered">
						<div className="container has-text-left">
							<h1 className="heading">Personalized Fields</h1>
							<br />

							<div className="field">
								<label className="label" htmlFor="name">
									Name
								</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="e.g Alex Smith"
										id="designerFormName"
									/>
								</div>
							</div>
							<div className="field">
								<label className="label" htmlFor="email">
									Email
								</label>
								<div className="control">
									<input
										className="input"
										type="email"
										placeholder="e.g. alexsmith@gmail.com"
										id="designerFormEmail"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Designer;
