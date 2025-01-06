import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { NotificationLayout } from "@/app/layouts/notification/notification.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { useSettings } from "@/shared/store/settings/useSettings";
import { useSaveScroll } from "@/shared/store/storage/useSaveScroll";
import { useStorage } from "@/shared/store/storage/useStorage.tsx";
import { Outlet } from "@tanstack/react-router";
import styles from "./global.layout.module.scss";

export const GlobalLayout = () => {
	useStorage();
	useSettings();
	useSaveScroll();

	return (
		<div className={styles.global_layout}>
			<NotificationLayout />
			<NavigationLayout />
			<SearchLayout />
			<main className={styles.main} id="main">
				<Outlet />
			</main>
		</div>
	);
};

export default GlobalLayout;
