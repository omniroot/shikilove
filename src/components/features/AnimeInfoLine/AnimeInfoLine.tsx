import type { FC } from "react";
import styles from "./AnimeInfoLine.module.scss";

interface IAnimeInfoLineProps {
	children?: React.ReactNode;
}
export const AnimeInfoLine: FC<IAnimeInfoLineProps> = ({ children }) => {
	return <div className={styles.anime_info_line}>{children}</div>;
};
