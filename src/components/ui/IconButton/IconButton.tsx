import type { FC } from "react";
import styles from "./IconButton.module.scss";
import clsx from "clsx";

interface IIconButtonProps {
	className?: string;
	children: React.ReactNode;
}

export const IconButton: FC<IIconButtonProps> = ({ className, children }) => {
	const _class = clsx(styles.icon_button, className);
	return <div className={_class}>{children}</div>;
};
