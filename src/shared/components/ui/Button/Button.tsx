import clsx from "clsx";
import { FC } from "react";
import styles from "./Button.module.scss";
import { Slot } from "@radix-ui/react-slot";
import { Loader } from "@ui/Loader/Loader.tsx";

interface IButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	asChild?: boolean;
	loading?: boolean;
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
	loading = false,
	variant = "primary",
	asChild = false,
	circle = false,
	...rest
}) => {
	const Comp = asChild ? Slot : "button";
	const _class = clsx(styles.button, className);
	return (
		<Comp
			className={_class}
			data-loading={loading}
			data-variant={variant}
			data-circle={circle}
			{...rest}
		>
			{loading && <Loader width={24} height={24} />}
			{children}
		</Comp>
	);
};

<Button>Button</Button>;
