import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface IButtonProps {
	children?: ReactNode;
	className?: string;
	as?: "button" | "Link";
	to?: string;
	variant?: "primary" | "ternary" | "secondary" | "animego" | "hanime" | "nhentai" | "shikimori";
	onClick?: () => void;
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
