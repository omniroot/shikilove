// import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { useScrollSave } from "@/shared/hooks/useScrollSave.tsx";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import { useSettings } from "@/shared/store/settings.store.tsx";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./global.layout.module.scss";

export const GlobalLayout = () => {
	const { currentUserError } = useCurrentUser();
	const navigate = useNavigate();
	useSettings();
	useScrollSave();

	useEffect(() => {
		if (currentUserError) {
			console.log("Error while getting current user, try relogin", currentUserError);
			navigate("/login", { replace: true });
		}
	}, []);

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
