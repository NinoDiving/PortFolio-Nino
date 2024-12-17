import { Link } from "react-router-dom";
import { gameArray } from "../../../Service/DataGame/DataGame";
import "./GamePage.css";
export default function GamePage() {
	return (
		<>
			<h1 className="titlePageGame">Quelques Side-Project pour s'amuser</h1>
			<main className="game-container">
				{gameArray.map((game) => (
					<article key={game.id} className="game-card">
						<h2>{game.name}</h2>
						<p>Nombre de joueur: {game.nbPlayer}</p>
						<Link to={game.path}>
							<img className="game-img" src={game.imgSrc} alt={game.name} />
						</Link>
					</article>
				))}
			</main>
		</>
	);
}
