import React, { useEffect, useState } from "react";
import bg1 from "./backgrounds/1.jpg";

function Designer() {
	const [designerFormEventName, setDesignerFormEventName] = useState("");
	const [designerFormName, setDesignerFormName] = useState("");
	const [designerFormEmail, setDesignerFormEmail] = useState("");
	// const [computedOverlay, setComputedOverlay] = useState("");

	// useEffect(() => {
	// 	setComputedOverlay(`${designerFormName}\n\n${designerFormEmail}`);
	// }, [designerFormName, designerFormEmail]);

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
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgba(255, 255, 255, 0.5)",
									// whiteSpace: "pre-line",
									overflowY: "hidden",
								}}
							>
								<p style={{ opacity: designerFormName ? 1 : 0 }}>{designerFormName || "."}</p>
								<br />
								<br />
								<br />
								<p style={{ opacity: designerFormEventName ? 1 : 0 }}>
									<strong>{designerFormEventName || "."}</strong>
								</p>
								<br />
								<br />
								<br />
								<p style={{ opacity: designerFormEmail ? 1 : 0 }}>{designerFormEmail || "."}</p>
							</div>
						</div>
					</div>
					<div className="column is-4 has-text-centered">
						<div className="container has-text-left">
							<h1 className="heading">Personalized Fields</h1>
							<br />

							<div className="field">
								<label className="label" htmlFor="name">
									Event Name
								</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="e.g. Sam's Birthday Party"
										id="designerFormEventName"
										value={designerFormEventName}
										onChange={(e) => setDesignerFormEventName(e.target.value)}
									/>
								</div>
							</div>
							<div className="field">
								<label className="label" htmlFor="name">
									Your Name
								</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="e.g. Alex Smith"
										id="designerFormName"
										value={designerFormName}
										onChange={(e) => setDesignerFormName(e.target.value)}
									/>
								</div>
							</div>
							<div className="field">
								<label className="label" htmlFor="email">
									Your Email
								</label>
								<div className="control">
									<input
										className="input"
										type="email"
										placeholder="e.g. alexsmith@gmail.com"
										id="designerFormEmail"
										value={designerFormEmail}
										onChange={(e) => setDesignerFormEmail(e.target.value)}
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
