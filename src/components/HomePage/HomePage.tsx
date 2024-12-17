import HardSkills from "./HardSkills/HardSkills";
import Project from "./ProjetCarousel/Project";
export default function HomePage() {
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
							<h2 className="mt-4">Enchanté je m'appelle Nino </h2>
							<img
								className="ninoPic"
								src="./src/assets/images/PhotoCV.png"
								alt="Profile Nino"
							/>
							<p>
								Passionné par l'informatique depuis mon enfance, j'ai relevé le
								défi, à 27 ans, de devenir développeur Web. Depuis mes premiers
								pas dans le monde numérique, j'ai toujours été fasciné par la
								manière dont les technologies transforment notre quotidien.
								Aujourd'hui, dans un secteur aussi dynamique que compétitif, je
								cherche à me démarquer en mettant l'accent sur l'originalité, la
								créativité. Au-delà de la simple ligne de code, c'est
								l'expérience utilisateur que je vise à améliorer : chaque projet
								est une occasion de créer quelque chose d'unique, fonctionnel et
								esthétique. <br /> Plutôt que vous montrez une simple page de CV
								(même si j'en ai un, bien sûr 😉). Je vous propose mon premier
								PortFolio !
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
				<Project />
			</main>
		</>
	);
}
