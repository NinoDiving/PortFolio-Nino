import { Link } from "react-router-dom";
import useIntersectionObserver from "../../Service/AnimationScroll/AnimationScroll";
import HardSkills from "./HardSkills/HardSkills";
import Project from "./ProjetCarousel/Project";
export default function HomePage() {
	const { ref: sectionRef, isVisible } = useIntersectionObserver(0.1);
	return (
		<>
			<main className="flex flex-col items-center justify-center">
				<section className="flex flex-col items-center ">
					<div className="glitch-wrapper">
						<div className="glitch" data-text="Jautee Nino Développeur Web">
							Jautee Nino <br /> Développeur Web
						</div>
					</div>
					<video
						className="entryVideo"
						autoPlay
						loop
						muted
						src="./src/assets/images/video.mp4"
					/>
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						className="svg-curve"
						viewBox="0 0 1440 79"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z" />
					</svg>
					<article className="midContent">
						<section className="textBox">
							<h2>Enchanté je m'appelle Nino </h2>
							<img
								className="ninoPic"
								src="./src/assets/images/PhotoCV.png"
								alt="Profile Nino"
							/>
							<p>
								Plutôt que de me limiter à une simple page de CV (même si j'en
								ai un bien sûr ➡️{" "}
								<a
									className="cvNino"
									href="src\assets\images\CV Jautee Nino FR.pdf"
									download="CV-Jautee-Nino"
								>
									Mon CV téléchargeable
								</a>{" "}
								), je vous propose de découvrir mon tout premier portfolio. À
								travers celui-ci, je souhaite vous plonger dans mon univers et
								partager ma vision du développement web.
							</p>
						</section>
						<video
							className="technoGif"
							autoPlay
							loop
							muted
							src="./src/assets/images/videoComputer.mp4"
						/>
					</article>
				</section>
				<HardSkills />
				<section
					ref={sectionRef}
					className={`more-about-me ${isVisible ? "active" : ""}`}
				>
					<h2>Vous voulez me connaître un peu plus ?</h2>
					<button className="btn-more" type="button">
						Oui j'aimerai bien !
					</button>
					<Link to="/jeux">
						<button className="btn-more" type="button">
							Non, je veux juste voir tes projets !
						</button>
					</Link>
				</section>
				<Project />
			</main>
		</>
	);
}
