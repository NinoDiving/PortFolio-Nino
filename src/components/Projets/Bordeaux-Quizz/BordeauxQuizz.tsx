import "/src/App.css";
import useIntersectionObserver from "../../../Service/AnimationScroll/AnimationScroll";
import "./bordeaux.css";
export default function BordeauxQuizz() {
	const headerObserver = useIntersectionObserver(0.1);
	const stackObserver = useIntersectionObserver(0.1);
	return (
		<>
			<main>
				<section
					ref={headerObserver.ref}
					className={`bordeaux_header ${headerObserver.isVisible ? "active" : ""}`}
				>
					<h1>Projet Bordeaux-Quizz</h1>
					<img
						src="./src/assets/images/BordeauxQuizz.png"
						alt="Bordeaux-Quizz"
					/>
					<p>
						Testez vos connaissances sur Bordeaux avec notre{" "}
						<strong>quiz</strong> ! Défiez vos amis et votre famille avec des
						questions sur l'histoire, la culture, et les anecdotes les plus
						insolites de la ville. Devenez un véritable expert bordelais !
					</p>
					<img src="./src/assets/images/BordeauxQuizzQuestion.png" alt="" />
					<p>
						Ce projet a été une expérience enrichissante qui nous a permis de
						développer de nombreuses compétences. Nous avons appris à travailler
						en binome de manière efficace, à communiquer de façon claire et
						constructive, et à résoudre des problèmes complexes en trouvant des
						solutions innovantes. Ces compétences seront précieuses pour mes
						futurs projets.
					</p>
				</section>
				<section
					ref={stackObserver.ref}
					className={`bordeaux_stack ${stackObserver.isVisible ? "active" : ""}`}
				>
					<h2>
						Pour réaliser ce projet, j'ai mis en œuvre les technologies
						suivantes :
					</h2>
					<div className="stack_container">
						<img src="/src/assets/images/iconeJS.svg" alt="JavaScript" />
						<img src="/src/assets/images/iconeCSS.svg" alt="Css" />
						<img src="/src/assets/images/iconeHTML.svg" alt="Html" />
					</div>
				</section>
			</main>
		</>
	);
}
