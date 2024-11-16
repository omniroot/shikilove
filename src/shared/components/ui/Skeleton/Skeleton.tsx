import { FC, ReactNode } from "react";
import styles from "./Skeleton.module.scss";
import clsx from "clsx";
interface ISkeletonProps {
	className?: string;
	children?: ReactNode;

	style?: React.CSSProperties;
	variant?: "container" | "element";
	// scale?: string;
}
export const Skeleton: FC<ISkeletonProps> = ({
	className,
	children,
	variant = "element",
	style,
}) => {
	const _class = clsx(styles.skeleton, className, {
		// [styles.title]: variant === "title",
		// [styles.description]: variant === "description",
	});
	return (
		<div className={_class} data-variant={variant} style={style}>
			{children}
		</div>
	);
};
