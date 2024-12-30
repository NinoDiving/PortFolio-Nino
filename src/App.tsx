import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/") {
			setIsLoading(true);
			const timer = setTimeout(() => {
				setIsLoading(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
		setIsLoading(false);
	}, [location.pathname]);

	return (
		<>
			{isLoading ? (
				<ProgressBar />
			) : (
				<>
					<Header />
					<main>
						<Outlet />
					</main>
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
