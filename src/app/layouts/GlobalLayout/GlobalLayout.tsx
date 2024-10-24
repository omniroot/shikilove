import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { useAuthorization } from "@/shared/hooks/useAuthorization.tsx";
import { useFetchCurrentUser } from "@/shared/hooks/useFetchCurrentUser.tsx";
import { useGlobalStore } from "@/shared/store/store.tsx";
import { BottomNavigation } from "@ui/BottomNavigation/BottomNavigation.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Sidebar } from "@widgets/Sidebar/Sidebar.tsx";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import styles from "./GlobalLayout.module.scss";

export const GlobalLayout = () => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	const isTablet = useMediaQuery(
		"only screen and (min-width: 769px) and (max-width: 1024px)",
	);
	const isDesktop = useMediaQuery("only screen and (min-width: 1025px)");
	const { isRightSidebarOpened, rightSidebarContent } = useGlobalStore(
		(state) => state,
	);
	const { loading, error, ...rest } = useFetchCurrentUser();
	const { refreshTokens } = useAuthorization();

	const refreshAndSaveTokens = async () => {
		const respose = await refreshTokens();
		if (respose) {
			localStorage.setItem("access_token", respose.access_token);
			localStorage.setItem("refresh_token", respose.refresh_token);
			window.location.reload();
			return true;
		}
		return false;
	};

	if (loading) return <div></div>;
	if (error?.networkError?.message.includes("401") === true) {
		if (localStorage.getItem("refresh_token")) {
			refreshAndSaveTokens();
			return null;
		}
		return <LoginPage />;
	}

	console.log("@ loading", loading);
	console.log("@ rest", rest);
	return (
		<div className={styles.global_layout}>
			{(isTablet || isDesktop) && <Sidebar />}
			<main className={styles.main}>
				<Outlet />
			</main>
			{isMobile && <BottomNavigation />}
			<AnimatePresence mode="sync">
				{isRightSidebarOpened && (
					<motion.div
						layout
						initial={{ width: 0 }}
						animate={{ width: "250px" }}
						exit={{ width: 0 }}
						transition={{ duration: 0.15 }}
						className={clsx(styles.right_sidebar, {
							[styles.opened]: isRightSidebarOpened,
						})}
					>
						{rightSidebarContent}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default GlobalLayout;
