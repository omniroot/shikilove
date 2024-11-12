// import LoginPage from "@/app/pages/LoginPage/LoginPage.tsx";
import { useAuthorization } from "@/shared/hooks/useAuthorization.tsx";
import { Outlet } from "react-router-dom";
import styles from "./global.layout.module.scss";
import { Header } from "@/shared/components/widgets/Header/Header.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import { BottomNavigation } from "@ui/BottomNavigation/BottomNavigation.tsx";

export const GlobalLayout = () => {
	const { currentUserError } = useAuthorization();
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	// const isTablet = useMediaQuery("only screen and (min-width: 769px) and (max-width: 1024px)");
	// const isDesktop = useMediaQuery("only screen and (min-width: 1025px)");
	// const { isRightSidebarOpened, rightSidebarContent } = useGlobalStore((state) => state);

	// if (!currentUser && isCurrentUserLoading) return <div>Loading...</div>;
	if (currentUserError) {
		console.log("Error while getting current user, try relogin", currentUserError);
		// return <LoginPage />;
		return null;
	}

	return (
		<div className={styles.global_layout}>
			{/* {(isTablet || isDesktop) && <Sidebar />} */}
			{/* {(isTablet || isDesktop) && <FloatingSearchButton />} */}
			{isMobile && <Header />}
			{/* <FloatingSearchBar /> */}
			<main className={styles.main}>
				<Outlet />
			</main>
			{isMobile && <BottomNavigation />}
			{/* <AnimatePresence mode="sync">
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
			</AnimatePresence> */}
		</div>
	);
};

export default GlobalLayout;