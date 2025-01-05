import { CONSTS } from "@/shared/consts/consts.ts";
import { ShikimoriIcon } from "@/shared/icons/index.tsx";
import { useAuth } from "@/shared/services/auth/useAuth";
import { createLazyRoute } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { useEffect } from "react";
import styles from "./login.page.module.scss";

export const LoginPage = () => {
	const { code } = Route.useSearch();
	const { login } = useAuth();
	const onLoginButtonClick = () => {
		window.open(CONSTS.OAUTH_URL, "_self");
	};
	useEffect(() => {
		if (code && code?.length > 1) {
			login(code);
		}
	}, []);

	return (
		<div className={styles.login_page}>
			<ImageView src="/login_cat.png" className={styles.cat_image} />
			<div className={styles.login_card}>
				<div className={styles.login_header}>
					<span className={styles.login_text}>Login</span>
					<span className={styles.login_about}>
						To use the application, you need an account on shikimori.one
					</span>
				</div>
				<div className={styles.login_actions}>
					<Button
						onClick={onLoginButtonClick}
						variant="shikimori"
						className={styles.shikimori_button}
					>
						<ShikimoriIcon />
						Shikimori
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Route = createLazyRoute("/login")({
	component: LoginPage,
});
