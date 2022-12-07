import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

interface Props {
	children: any;
	parent?: any;
	className: string;
}

export default function Portal({ children, parent, className }: Props) {

	const el = useMemo(() => document.createElement("div"), []);

	useEffect(() => {

		const target = parent && parent.appendChild ? parent : document.body;

		const classList = ["portal-container"];

		if (className) {
			className.split(" ").forEach((item) => classList.push(item))
		}

		classList.forEach((item) => el.classList.add(item))

		target.appendChild(el);

		return () => target.removeChild(el)
	}, [el, parent, className])
	return ReactDOM.createPortal(children, el)
}