import { useState } from "react";
import "./HangMan.css";
export default function HangMan() {
	const [isLetters, setIsLetters] = useState<string[]>([""]);
	const words = ["Hello", "World"];
	const answer = [""];
	// Faire système de input qui relie les letters click à l'input puis lier son tableau de words à l'input

	return (
		<>
			<h1>Le jeu du pendu !</h1>
			<input value={isLetters} type="text" readOnly />
			<div className="letter-container">
				{letters.map((letter) => (
					<button
						className="letter"
						type="button"
						onClick={() => setIsLetters(isLetters + letter)}
					>
						{letter}
					</button>
				))}
			</div>
		</>
	);
}
const letters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
