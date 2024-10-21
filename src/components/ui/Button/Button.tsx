import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface IButtonProps {
	children?: ReactNode;
	className?: string;
	variant?: "accent" | "animego" | "hanime" | "nhentai";
	onClick?: () => void;
}
export const Button: FC<IButtonProps> = ({
	children,
	className,
	variant = "accent",
	...rest
}) => {
	const _class = clsx(styles.button, className, {
		[styles.animego]: variant === "animego",
		[styles.hanime]: variant === "hanime",
		[styles.nhentai]: variant === "nhentai",
	});
	return (
		<button className={_class} {...rest}>
			{children}
		</button>
	);
};
