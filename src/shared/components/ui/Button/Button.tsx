import { createLink } from "@tanstack/react-router";
import clsx from "clsx";
import React, { FC } from "react";
import styles from "./Button.module.scss";

interface IButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
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
	circle = false,
	...rest
}) => {
	const _class = clsx(styles.button, className);

	return (
		<button
			className={_class}
			data-loading={loading}
			data-variant={variant}
			data-circle={circle}
			{...rest}
		>
			{children}
			{/* <div>{loading && <Loader width={24} height={24} />}</div> */}
		</button>
	);
};

interface BasicLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
	({ children, className, loading = false, variant = "primary", circle = false, ...rest }, ref) => {
		const _class = clsx(styles.button, className);
		return (
			<a
				ref={ref}
				className={_class}
				data-loading={loading}
				data-variant={variant}
				data-circle={circle}
				{...rest}
			>
				{children}
			</a>
		);
	},
);
BasicLinkComponent.displayName = "BasicLinkComponent";
export const ButtonLink = createLink(BasicLinkComponent);
