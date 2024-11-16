import { CONSTS } from "@/shared/consts/consts.ts";
import { ShikimoriIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { useSearchParams } from "react-router-dom";
import styles from "./login.page.module.scss";
import { useEffect } from "react";
import { authApi } from "@/shared/services/auth/auth.api.ts";
import { saveTokens } from "@/shared/utils/saveTokens.ts";

export const LoginPage = () => {
	const [searchParams] = useSearchParams();
	const code = searchParams.get("code");

	useEffect(() => {
		const fetchData = async () => {
			if (code && code?.length > 1) {
				const response = await authApi.fetchTokens(code);
				if (response) {
					saveTokens(response);
					window.open(CONSTS.URL, "_self");
				}
			}
		};
		fetchData();
	}, [code]);

	const onLoginButtonClick = () => {
		window.open(CONSTS.OAUTH_URL, "_self");
	};

	const onLitemodeButtonClick = () => {
		alert("Not realized");
	};

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
					<Button
						onClick={onLitemodeButtonClick}
						variant="secondary"
						className={styles.litemode_button}
					>
						Lite mode
					</Button>
				</div>
				<span className={styles.litemode_info}>
					Lite mode - option that does not require authorization, but has a number of limitations
					and errors.
				</span>
			</div>
		</div>
	);
};

export default LoginPage;
