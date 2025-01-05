import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { useSettings } from "@/shared/store/settings/useSettings";
import { useSaveScroll } from "@/shared/store/storage/useSaveScroll";
import { useStorage } from "@/shared/store/storage/useStorage.tsx";
import { useUser } from "@pages/user/_api/user";
import { Link, Outlet } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import styles from "./global.layout.module.scss";

export const GlobalLayout = () => {
	useStorage();
	useSettings();
	useSaveScroll();

	return (
		<div className={styles.global_layout}>
			<NavigationLayout />
			<SearchLayout />
			{/* TODO fix that shit if user not login */}

			<main className={styles.main} id="main">
				<Outlet />
			</main>
		</div>
	);
};

export default GlobalLayout;
