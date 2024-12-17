import { Link } from "react-router-dom";
import useIntersectionObserver from "../../../Service/AnimationScroll/AnimationScroll";
export default function Project() {
	const { ref: sectionRef, isVisible } = useIntersectionObserver(0.1);
	const imgProject = [
		{
			id: 1,
			src: "./src/assets/images/BordeauxQuizz.png",
			endpoint: "/bordeauxquizz",
		},
		{
			id: 2,
			src: "./src/assets/images/popCornBox.png",
			endpoint: "/popcornbox",
		},
		{
			id: 3,
			src: "./src/assets/images/BordeauxQuizz.png",
			endpoint: "/todolist",
		},
	];
	return (
		<>
			<h2 className="projectTitle">Quelques projets...</h2>
			<article
				ref={sectionRef}
				className={`projectContainer ${isVisible ? "active" : ""}`}
			>
				{imgProject.map((project) => (
					<section key={project.id} className="card">
						<Link to={project.endpoint}>
							<img src={project.src} alt="" />
						</Link>
					</section>
				))}
			</article>
		</>
	);
}
