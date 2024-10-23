import clsx from "clsx";
import styles from "./Divider.module.scss";
import type { FC } from "react";

interface IDivideProps {
	className?: string;
	orientation?: "horizontal" | "vertical";
}

export const Divider: FC<IDivideProps> = ({
	className,
	orientation = "horizontal",
}) => {
	const _class = clsx(styles.divider, className);
	return <div className={_class} data-orientation={orientation} />;
};
