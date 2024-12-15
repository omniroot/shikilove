import clsx from "clsx";
import { FC } from "react";
import styles from "./Button.module.scss";
import { Slot } from "@radix-ui/react-slot";

interface IButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	asChild?: boolean;
	variant?:
		| "primary"
		| "outline"
		| "secondary"
		| "ghost"
		| "gradient"
		| "animego"
		| "hanime"
		| "nhentai"
		| "shikimori";
	circle?: boolean;
}
export const Button: FC<IButtonProps> = ({
	children,
	className,
	variant = "primary",
	asChild = false,
	circle = false,
	...rest
}) => {
	const Comp = asChild ? Slot : "button";
	const _class = clsx(styles.button, className);
	return (
		<Comp className={_class} data-variant={variant} data-circle={circle} {...rest}>
			{children}
		</Comp>
	);
};

<Button>Button</Button>;
