type SquareProps = {
	value: string;
	onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: SquareProps) {
	return (
		<button onClick={onSquareClick} type="button" className="square">
			{value}
		</button>
	);
}
