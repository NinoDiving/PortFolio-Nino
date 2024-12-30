import { Swiper, SwiperSlide } from "swiper/react";
import useIntersectionObserver from "../../../Service/AnimationScroll/AnimationScroll";
import "./Project.css";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";

export default function Project() {
	const { ref: sectionRef, isVisible } = useIntersectionObserver(0.1);
	const imgProject = [
		{
			id: 1,
			src: "./src/assets/images/tictactoe.jpg",
			endpoint: "/bordeauxquizz",
		},
		{
			id: 2,
			src: "./src/assets/images/popCornBox.png",
			endpoint: "/popcornbox",
		},
		{
			id: 3,
			src: "./src/assets/images/BordeauxQuizzSquare.png",
			endpoint: "/todolist",
		},
		{ id: 4, src: "./src/assets/images/hangman.jpg", endpoint: "/jeux" },
	];
	return (
		<main
			ref={sectionRef}
			className={`projectContainer ${isVisible ? "active" : ""}`}
		>
			<h2 className="projectTitle">Quelques projets...</h2>
			<Swiper
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				speed={2500}
				effect={"cube"}
				grabCursor={true}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				pagination={true}
				modules={[EffectCube, Pagination, Autoplay]}
				className="mySwiper"
			>
				{imgProject.map((project) => (
					<SwiperSlide key={project.id}>
						<img className="rounded" src={project.src} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	);
}
