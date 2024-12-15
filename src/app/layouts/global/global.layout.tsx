// import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { useScrollSave } from "@/shared/hooks/useScrollSave.tsx";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import { useSettings } from "@/shared/store/settings.store.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Link, Outlet } from "react-router-dom";
import styles from "./global.layout.module.scss";

export const GlobalLayout = () => {
	const { currentUser } = useCurrentUser();
	useSettings();
	useScrollSave();

	return (
		<div className={styles.global_layout}>
			<NavigationLayout />
			<SearchLayout />
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
