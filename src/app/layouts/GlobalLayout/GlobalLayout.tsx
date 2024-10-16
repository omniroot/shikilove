import { useAuthorization } from "@/shared/hooks/useAuthorization";
import { useFetchCurrentUser } from "@/shared/hooks/useFetchCurrentUser";
import { Outlet } from "react-router-dom";
import styles from "./GlobalLayout.module.scss";
import { Sidebar } from "@widgets/Sidebar/Sidebar";
import { LoginPage } from "@/app/pages/LoginPage/LoginPage";
import { useGlobalStore } from "@/shared/store/store";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

export const GlobalLayout = () => {
	const { isRightSidebarOpened, rightSidebarContent } = useGlobalStore((state) => state);
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

	if (loading) return "loading...";
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
			<Sidebar />
			<main className={styles.main}>
				<Outlet />
			</main>
			<AnimatePresence mode="sync">
				{isRightSidebarOpened && (
					<motion.div
						layout
						initial={{ width: 0 }}
						animate={{ width: "250px" }}
						exit={{ width: 0 }}
						transition={{ duration: 0.15 }}
						className={clsx(styles.right_sidebar, { [styles.opened]: isRightSidebarOpened })}
					>
						{rightSidebarContent}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
