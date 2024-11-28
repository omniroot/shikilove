import { CONSTS } from "@/shared/consts/consts.ts";
import { ShikimoriIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import styles from "./login.page.module.scss";
import { useAuthorization } from "@/shared/services/auth/useAuthorization.tsx";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const LoginPage = () => {
	const [searchParams] = useSearchParams();
	const code = searchParams.get("code");
	const { auth, authError, authLoading, fetchAuth } = useAuthorization();
	const onLoginButtonClick = () => {
		window.open(CONSTS.OAUTH_URL, "_self");
	};
	useEffect(() => {
		if (code && code?.length > 1) {
			fetchAuth();
		}
	}, []);

	const onLitemodeButtonClick = () => {
		alert("Not realized");
	};
	console.log({ auth, authError, authLoading, fetchAuth });

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
