import { LoginPage } from "@/app/pages/LoginPage/LoginPage";
import { useAuthorization } from "@/shared/hooks/useAuthorization";
import { useFetchCurrentUser } from "@/shared/hooks/useFetchCurrentUser";
import { Box } from "@ui/Box/Box";
import { Sidebar } from "@widgets/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./GlobalLayout.module.scss";

export const GlobalLayout = () => {
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
		<div className={styles.globallayout}>
			<Sidebar />
			<Box width="100%" className={styles.main}>
				<Outlet />
			</Box>
		</div>
	);
};
