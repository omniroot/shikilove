import type { FC, ReactNode } from "react";
import styles from "./AnimeList.module.scss";
import clsx from "clsx";
type IAnimeListProps = {
	children?: ReactNode;
	className?: string;
	scroll?: "none" | "vertical" | "horizontal";
};
export const AnimeList: FC<IAnimeListProps> = ({ children, className, scroll }) => {
	const _class = clsx(styles.animes_list, className);

	return (
		<div
			className={_class}
			style={scroll === "horizontal" ? { overflowX: "scroll" } : { overflowY: "scroll" }}
		>
			{children}
		</div>
	);
};
