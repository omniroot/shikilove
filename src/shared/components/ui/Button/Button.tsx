import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface IButtonProps {
	children?: ReactNode;
	className?: string;
	as?: "button" | "Link";
	to?: string;
	variant?: "primary" | "secondary" | "animego" | "hanime" | "nhentai" | "shikimori";
	onClick?: () => void;
}
export const Button: FC<IButtonProps> = ({
	children,
	className,
	as = "button",
	to = "",
	variant = "primary",
	...rest
}) => {
	const _class = clsx(styles.button, className, {
		[styles.secondary]: variant === "secondary",
		[styles.animego]: variant === "animego",
		[styles.hanime]: variant === "hanime",
		[styles.nhentai]: variant === "nhentai",
		[styles.shikimori]: variant === "shikimori",
	});
	const Component = as === "Link" ? Link : "button";
	return (
		<Component className={_class} to={to} {...rest}>
			{children}
		</Component>
	);
};
