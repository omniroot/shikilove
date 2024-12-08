// import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import LoginPage from "@pages/login/login.page.tsx";
import { Outlet, ScrollRestoration } from "react-router-dom";
import styles from "./global.layout.module.scss";
import { useSettings } from "@/shared/store/settings.store.tsx";
import { useUserRate } from "@/shared/services/userRate/useUserRate.tsx";

export const GlobalLayout = () => {
	const { currentUserError } = useCurrentUser();
	const { userRates } = useUserRate();
	useSettings();

	if (currentUserError) {
		console.log("Error while getting current user, try relogin", currentUserError);
		return <LoginPage />;
	}

	if (!userRates?.pages || currentUserError) return null;

	return (
		<div className={styles.global_layout}>
			<NavigationLayout />
			<SearchLayout />
			<main className={styles.main}>
				<Outlet />
			</main>
			<ScrollRestoration />
		</div>
	);
};

export default GlobalLayout;
