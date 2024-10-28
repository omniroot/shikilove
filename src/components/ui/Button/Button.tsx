import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface IButtonProps {
	children?: ReactNode;
	className?: string;
	variant?:
		| "primary"
		| "secondary"
		| "animego"
		| "hanime"
		| "nhentai"
		| "shikimori";
	onClick?: () => void;
}
export const Button: FC<IButtonProps> = ({
	children,
	className,
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
	return (
		<button className={_class} {...rest}>
			{children}
		</button>
	);
};
