import { FC } from "react";
import styles from "./Loader.module.scss";

interface ILoaderProps {
	fullscreen?: boolean;
}
export const Loader: FC<ILoaderProps> = ({ fullscreen }) => {
	if (fullscreen)
		return (
			<div className={styles.fullscreen_loader}>
				<div className={styles.loader} />
			</div>
		);

	return <div className={styles.loader} />;
};
