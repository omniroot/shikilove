import type { FC } from "react";
import styles from "./HeadingSection.module.scss";

interface IHeadingSectionProps {
	children?: React.ReactNode;
	actionsSlot?: React.ReactNode;
	title?: string;
}

export const HeadingSection: FC<IHeadingSectionProps> = ({ children, actionsSlot, title }) => {
	return (
		<div className={styles.heading_section}>
			<div className={styles.header}>
				<span className={styles.title}>{title}</span>
				<div className={styles.actions}>{actionsSlot}</div>
			</div>
			{children}
		</div>
	);
};
