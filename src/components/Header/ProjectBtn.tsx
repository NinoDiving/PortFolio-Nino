import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
	FilmIcon,
	ListBulletIcon,
	PuzzlePieceIcon,
	WrenchIcon,
} from "@heroicons/react/24/outline";

const solutions = [
	{
		name: "Bordeaux Quizz",
		description:
			"Un jeu avec 2 modes de difficultés et 10questions sur la ville de Bordeaux.",
		href: "/bordeauxquizz",
		icon: ListBulletIcon,
	},
	{
		name: "Netflux",
		description:
			"Une plateform, qui permet de se renseigner sur les films du moments.",
		href: "/popcornbox",
		icon: FilmIcon,
	},
	{
		name: "Jeux",
		description: "Application avec une interface ToDoList, Calendrier et Timer",
		href: "/jeux",
		icon: PuzzlePieceIcon,
	},
	{
		name: "Projet 3",
		description: "En construction",
		href: "#",
		icon: WrenchIcon,
	},
];

export default function ProjectButton() {
	return (
		<Popover className="relative">
			<PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
				<span className="buttonProject">Projets</span>
				<ChevronDownIcon aria-hidden="true" className="size-6" />
			</PopoverButton>

			<PopoverPanel
				transition
				className="absolute left-1/2 z-10 mt-5 mr- flex w-screen max-w-max -translate-x-3/4 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
			>
				<div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
					<div className="p-2 ">
						{solutions.map((item) => (
							<div
								key={item.name}
								className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
							>
								<div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
									<item.icon
										aria-hidden="true"
										className="size-6 text-gray-600 group-hover:text-indigo-600"
									/>
								</div>
								<div>
									<a href={item.href} className="font-semibold text-gray-900">
										{item.name}
										<span className="absolute inset-0" />
									</a>
									<p className="mt-1 text-gray-600">{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</PopoverPanel>
		</Popover>
	);
}
