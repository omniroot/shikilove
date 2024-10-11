import type { FC } from "react";
import styles from "./IconButton.module.scss";

interface IIconButtonProps {
	children: React.ReactNode;
}

export const IconButton: FC<IIconButtonProps> = ({ children }) => {
	return <div className={styles.icon_button}>{children}</div>;
};
