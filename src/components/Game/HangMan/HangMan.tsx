import { useState } from "react";
import "./HangMan.css";

export default function HangMan() {
	const [isLetters, setIsLetters] = useState<string[]>([]);
	const [currentWords, setCurrentWords] = useState(0);
	const score = 0;
	const words = [
		"javascript",
		"react",
		"mysql",
		"mangodb",
		"tailwindcss",
		"docker",
		"express",
		"goland",
		"swift",
		"bootstrap",
		"angular",
		"java",
		"c",
		"php",
	];

	const hiddenWord = (word: string, guessedLetters: string[]) => {
		if (!word) return [];
		return word
			.split("")
			.map((letter) => (guessedLetters.includes(letter) ? letter : "_"));
	};

	const handleNext = () => {
		setIsLetters([]);
		setCurrentWords((prev) => (prev + 1) % words.length);
	};

	const handleLetterClick = (letter: string) => {
		if (!isLetters.includes(letter.toLowerCase())) {
			setIsLetters([...isLetters, letter.toLowerCase()]);
		}
	};

	const handleClear = () => {
		setIsLetters([]);
	};

	return (
		<>
			<h1>Le jeu du pendu !</h1>
			<main className="board-game">
				<h2 className="answer-container">
					{hiddenWord(words[currentWords], isLetters).join(" ")}
				</h2>
				{words[currentWords] &&
					hiddenWord(words[currentWords], isLetters).join("") ===
						words[currentWords] &&
					score + 1 && (
						<p>
							{`Bravo ! Vous avez trouvé le mot. Vous gagnez 1 point, votre score
							est de ${score}`}
						</p>
					)}

				<div className="letter-container">
					{letters.map((letter) => (
						<button
							key={letter}
							className={"letter"}
							type="button"
							onClick={() => handleLetterClick(letter)}
						>
							{letter}
						</button>
					))}
				</div>
				<div className="btn-container">
					<button className="delete-btn" type="button" onClick={handleClear}>
						Effacer
					</button>
					<button className="next-btn" type="button" onClick={handleNext}>
						Mot suivant
					</button>
				</div>
			</main>
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
