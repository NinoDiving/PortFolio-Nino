import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { animated, useSpring } from "@react-spring/web";
import { cloneElement, forwardRef, useState } from "react";
import type { FadeProps } from "../../../Types/Modal/FadeProps";

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
	const {
		children,
		in: open,
		onClick,
		onEnter,
		onExited,
		ownerState,
		...other
	} = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter(null as any, true);
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited(null as any, true);
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{cloneElement(children, { onClick })}
		</animated.div>
	);
});

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	borderRadius: "15px",
	p: 4,
};

export default function SpringModal() {
	const [open, setOpen] = useState(false);
	const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSecondModalOpen = () => setIsSecondModalOpen(true);
	const handleSecondModalClose = () => setIsSecondModalOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>Oui, j'aimerai bien</Button>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						TransitionComponent: Fade,
					},
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Typography id="spring-modal-description" sx={{ mt: 2 }}>
							Passionné par l'informatique depuis mon enfance, j'ai décidé, à 27
							ans, de relever le défi de devenir développeur web. Dès mes
							premiers pas dans le monde numérique, j'ai été fasciné par la
							manière dont les technologies transforment notre quotidien.
						</Typography>
						<button
							className="modal-btn"
							type="button"
							onClick={handleSecondModalOpen}
						>
							Tu veux en savoir plus ?
						</button>
					</Box>
				</Fade>
			</Modal>
			<Modal
				open={isSecondModalOpen}
				onClose={handleSecondModalClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						TransitionComponent: Fade,
					},
				}}
			>
				<Fade in={isSecondModalOpen}>
					<Box sx={style}>
						<Typography id="second-modal-description" sx={{ mt: 2 }}>
							Aujourd'hui, dans un secteur à la fois dynamique et compétitif, je
							m'efforce de me démarquer en mettant l'accent sur l'originalité et
							la créativité. Pour moi, chaque ligne de code est bien plus qu'une
							simple instruction : c'est un outil pour améliorer l'expérience
							utilisateur et donner vie à des projets uniques, fonctionnels et
							esthétiques.
						</Typography>
						<button
							className="modal-btn"
							type="button"
							onClick={handleSecondModalClose}
						>
							Fermer
						</button>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
