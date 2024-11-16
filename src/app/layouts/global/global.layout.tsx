// import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { useUser } from "@/shared/services/user/useUser.tsx";
import LoginPage from "@pages/login/login.page.tsx";
import { Outlet } from "react-router-dom";
import styles from "./global.layout.module.scss";
import { NavigationLayout } from "@/app/layouts/navigation/navigation.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";

export const GlobalLayout = () => {
	const { currentUserError } = useUser();

	// const { isRightSidebarOpened, rightSidebarContent } = useGlobalStore((state) => state);

	// if (!currentUser && isCurrentUserLoading) return <div>Loading...</div>;
	if (currentUserError) {
		console.log("Error while getting current user, try relogin", currentUserError);
		return <LoginPage />;
		return null;
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
