import type { FC, ReactNode } from "react";
import styles from "./AnimeList.module.scss";
type IAnimeListProps = {
	children?: ReactNode;
};
export const AnimeList: FC<IAnimeListProps> = ({ children }) => {
	return <div className={styles.animes_list}>{children}</div>;
};
