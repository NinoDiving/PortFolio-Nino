import useIntersectionObserver from "../../../Service/AnimationScroll/AnimationScroll";
export default function HardSkills() {
	const { ref: sectionRef, isVisible } = useIntersectionObserver(0.1);

	return (
		<>
			<section
				ref={sectionRef}
				className={`hardSkills ${isVisible ? "active" : ""}`}
			>
				<article className="frontEndSkills">
					<h3>Front-end</h3>
					<ul>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeHTML.svg"
								alt="Html icone"
							/>
							HTML
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeCSS.svg"
								alt="Css icone"
							/>
							CSS
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeJS.svg"
								alt="Js icone"
							/>
							JavaScript
						</li>
					</ul>
				</article>
				<article className="backEndSkills">
					<h3>Back-end</h3>
					<ul>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeNODE.svg"
								alt="Node icone"
							/>
							Node.js
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeEXPRESS.svg"
								alt="Express icone"
							/>
							Express.js
						</li>
					</ul>
				</article>
				<article className="frameWork">
					<h3>Framework</h3>
					<ul>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeTYPESCRIPT.svg"
								alt="TypeScript icone"
							/>
							TypeScript
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills reactSpin"
								src="./src/assets/images/iconeREACT.svg"
								alt=""
							/>
							React
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills tailwindWave"
								src="./src/assets/images/iconeTAILWIND.svg"
								alt="Tailwind icone"
							/>
							Tailwind
						</li>
					</ul>
				</article>
			</section>
		</>
	);
}
