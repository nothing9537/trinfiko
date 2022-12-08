export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
	children: any;
	height: string;
	padding?: string;
	variant: 'transparent' | 'solid';
}