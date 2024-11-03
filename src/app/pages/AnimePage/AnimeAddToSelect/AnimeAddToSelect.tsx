import { ReactNode, FC } from "react";
import styles from "./AnimeAddToSelect.module.scss";

interface IAnimeAddToSelectProps {
	children?: ReactNode;
}
export const AnimeAddToSelect: FC<IAnimeAddToSelectProps> = () => {
	return <div className={styles.anime_add_to_select}></div>;
};
