export interface FadeProps {
	children: React.ReactElement<any>;
	in?: boolean;
	onClick?: any;
	onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
	onExited?: (node: HTMLElement, isAppearing: boolean) => void;
	ownerState?: any;
}
