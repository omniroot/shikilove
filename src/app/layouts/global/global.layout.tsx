// import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
// import { useSaveScroll } from "@/shared/hooks/useScrollSave.tsx";
import { useSaveScroll } from "@/shared/store/storage/useSaveScroll";
import { useSettings } from "@/shared/store/settings/useSettings";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import { Button } from "@ui/Button/Button.tsx";
// import { Link, Outlet } from "@tanstack/react-router";
import styles from "./global.layout.module.scss";
import { Link, Outlet } from "@tanstack/react-router";

export const GlobalLayout = () => {
	// useStorage();
	useSettings();
	useSaveScroll();
	const { currentUser } = useCurrentUser();

	return (
		<div className={styles.global_layout}>
			<NavigationLayout />
			<SearchLayout />
			{/* TODO fix that shit if user not login */}
			{!currentUser ? (
				<main className={styles.main} id="main">
					<Button asChild style={{ width: "100%" }}>
						<Link to="/login">Go to Login page</Link>
					</Button>
					<Outlet />
				</main>
			) : (
				<main className={styles.main} id="main">
					<Outlet />
				</main>
			)}
		</div>
	);
};

export default GlobalLayout;
