// import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import LoginPage from "@pages/login/login.page.tsx";
import { Outlet } from "react-router-dom";
import styles from "./global.layout.module.scss";
import { useSettings } from "@/shared/store/settings.store.tsx";

export const GlobalLayout = () => {
	const { currentUserError } = useCurrentUser();
	useSettings();

	if (currentUserError) {
		console.log("Error while getting current user, try relogin", currentUserError);
		return <LoginPage />;
	}

	return (
		<div className={styles.global_layout}>
			<NavigationLayout />
			<SearchLayout />
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
};

export default GlobalLayout;
