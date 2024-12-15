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
}
export const Button: FC<IButtonProps> = ({
	children,
	className,
	variant = "primary",
	asChild = false,
	...rest
}) => {
	const Comp = asChild ? Slot : "button";
	const _class = clsx(styles.button, className);
	return (
		<Comp className={_class} data-variant={variant} {...rest}>
			{children}
		</Comp>
	);
};

<Button>Button</Button>;
