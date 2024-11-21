// import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import LoginPage from "@pages/login/login.page.tsx";
import { Outlet } from "react-router-dom";
import styles from "./global.layout.module.scss";
import { useSettings } from "@/shared/hooks/useSettings.tsx";
import { useEffect } from "react";

export const GlobalLayout = () => {
	const { currentUserError } = useCurrentUser();
	const { theme } = useSettings();

	// const { isRightSidebarOpened, rightSidebarContent } = useGlobalStore((state) => state);

	// if (!currentUser && isCurrentUserLoading) return <div>Loading...</div>;
	if (currentUserError) {
		console.log("Error while getting current user, try relogin", currentUserError);
		return <LoginPage />;
	}
	useEffect(() => {
		document.documentElement.setAttribute("theme", theme);
	}, [theme]);

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
