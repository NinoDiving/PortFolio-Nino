import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import GamePage from "./components/Game/GamePage/GamePage";
import HangMan from "./components/Game/HangMan/HangMan";
import TicTacToe from "./components/Game/TicTacToe/TicTacToe";
import HomePage from "./components/HomePage/HomePage";
import BordeauxQuizz from "./components/Projets/Bordeaux-Quizz/BordeauxQuizz";
import Netflux from "./components/Projets/Netflux/Netflux";
import "./index.css";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/bordeauxquizz",
				element: <BordeauxQuizz />,
			},
			{
				path: "/popcornbox",
				element: <Netflux />,
			},
			{
				path: "/jeux",
				element: <GamePage />,
			},
			{
				path: "/tictactoe",
				element: <TicTacToe />,
			},
			{
				path: "/jeudupendu",
				element: <HangMan />,
			},
			{
				path: "/projet3",
			},
		],
	},
]);
const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
} else {
	console.error("No root element found.");
}
