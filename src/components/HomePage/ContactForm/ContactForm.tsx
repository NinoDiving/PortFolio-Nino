import { useState } from "react";
import "./Form.css";
export default function BasicForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [error, setError] = useState("");

	function onSubmit(e) {
		e.preventDefault();
		e.stopPropagation();

		fetch("https://formcarry.com/s/9qwc4cQP25s", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.code === 200) {
					alert("Merci de votre message, je reviens vers vous rapidement !");
				} else if (response.code === 422) {
					// Field validation failed
					setError(response.message);
				} else {
					// other error from formcarry
					setError(response.message);
				}
			})
			.catch((error) => {
				// request related error.
				setError(error.message ? error.message : error);
			});
	}

	return (
		<section className="formcarry-container">
			<form onSubmit={(e) => onSubmit(e)}>
				<div className="formcarry-block">
					<label htmlFor="name">Nom & Prénom</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						id="name"
						placeholder="Votre nom et prénom"
					/>
				</div>

				<div className="formcarry-block">
					<label htmlFor="email">Votre adresse e-mail</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id="email"
						placeholder="exemple@home.com"
					/>
				</div>

				<div className="formcarry-block">
					<label htmlFor="message">Votre message</label>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						id="message"
						placeholder="Entrez votre message..."
					></textarea>
				</div>

				<div className="formcarry-block">
					<button type="submit">Send</button>
				</div>
			</form>
		</section>
	);
}
