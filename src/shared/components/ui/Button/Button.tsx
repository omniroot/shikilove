import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface IButtonProps {
	children?: ReactNode;
	className?: string;
	id?: string;
	as?: "button" | "Link";
	to?: string;
	variant?:
		| "primary"
		| "ternary"
		| "transparent"
		| "gradient"
		| "secondary"
		| "animego"
		| "hanime"
		| "nhentai"
		| "shikimori";
	onClick?: (
		event:
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
			| React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => void;
}
export const Button: FC<IButtonProps> = ({
	children,
	className,
	as = "button",
	to = "",
	variant = "ternary",
	...rest
}) => {
	const _class = clsx(styles.button, className);
	const Component = as === "Link" ? Link : "button";
	return (
		<Component className={_class} data-variant={variant} to={to} {...rest}>
			{children}
		</Component>
	);
};
