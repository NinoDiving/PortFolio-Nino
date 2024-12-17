import { useState } from "react";
import calculateWinner from "../../../Service/Game/TicTacToe/TicTacToe";
import Square from "./Square";
import "./tictactoe.css";

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isNext, setIsNext] = useState(true);
	const onSquareClick = (i: number) => {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		if (isNext) {
			nextSquares[i] = "💻";
		} else {
			nextSquares[i] = "☎️";
		}
		setSquares(nextSquares);
		setIsNext(!isNext);
	};
	const draw = squares.every((square) => square !== null);
	const winner = calculateWinner(squares);
	let status: string;
	if (winner) {
		status = `Le joueur ${winner} a gagné la partie !`;
	} else if (draw) {
		status = "Égalité !";
	} else {
		status = `Au tour du joueur ${isNext ? "1" : "2"} `;
	}

	const handleResetClick = () => {
		if (winner || draw) {
			setSquares(Array(9).fill(null));
			setIsNext(true);
		}
	};
	return (
		<>
			<main className="board">
				<div className="status">{status}</div>
				<div className="board-row">
					<Square onSquareClick={() => onSquareClick(0)} value={squares[0]} />
					<Square onSquareClick={() => onSquareClick(1)} value={squares[1]} />
					<Square onSquareClick={() => onSquareClick(2)} value={squares[2]} />
				</div>
				<div className="board-row">
					<Square onSquareClick={() => onSquareClick(3)} value={squares[3]} />
					<Square onSquareClick={() => onSquareClick(4)} value={squares[4]} />
					<Square onSquareClick={() => onSquareClick(5)} value={squares[5]} />
				</div>
				<div className="board-row">
					<Square onSquareClick={() => onSquareClick(6)} value={squares[6]} />
					<Square onSquareClick={() => onSquareClick(7)} value={squares[7]} />
					<Square onSquareClick={() => onSquareClick(8)} value={squares[8]} />
				</div>
			</main>
			<div className="retryContainer">
				<button className="retry_game" type="button" onClick={handleResetClick}>
					{winner || draw ? "Rejouer" : "Partie en cours"}
				</button>
			</div>
		</>
	);
}
