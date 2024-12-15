// import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import { useUserRate } from "@/shared/services/userRate/useUserRate.tsx";
import { useSettings } from "@/shared/store/settings.store.tsx";
import { Outlet, redirect } from "react-router-dom";
import styles from "./global.layout.module.scss";
import { useScrollSave } from "@/shared/hooks/useScrollSave.tsx";

export const GlobalLayout = () => {
	const { currentUserError } = useCurrentUser();
	const { userRates } = useUserRate();
	useSettings();
	useScrollSave();

	if (currentUserError) {
		console.log("Error while getting current user, try relogin", currentUserError);
		redirect("/login");
	}

	if (!userRates?.pages || currentUserError) return null;

	return (
		<div className={styles.global_layout}>
			<NavigationLayout />
			<SearchLayout />
			<main className={styles.main} id="main">
				<Outlet />
			</main>
		</div>
	);
};

export default GlobalLayout;
