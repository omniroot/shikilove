import styles from './Divider.module.scss'
import type { FC } from "react";

interface IDivideProps {
	orientation?: "horizontal" | "vertical";
}

export const Divider: FC<IDivideProps> = ({ orientation = "horizontal" }) => {
	return (
		<div
			className={styles.divider}
			data-orientation={orientation}
		/>
	);
};
