import { ReactNode, FC } from "react";
import styles from "./FloatingSearchButton.module.scss";
import { SearchIcon } from "@/shared/icons/index.tsx";
import { useFloatingSearchBar } from "@/shared/store/store.tsx";

interface IFloatingSearchButtonProps {
	children?: ReactNode;
}
export const FloatingSearchButton: FC<IFloatingSearchButtonProps> = () => {
	const { toggleFloatingSearchBar } = useFloatingSearchBar();
	return (
		<div className={styles.floating_search_button} onClick={toggleFloatingSearchBar}>
			<SearchIcon />
		</div>
	);
};
