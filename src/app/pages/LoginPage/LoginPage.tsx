import { CONSTS } from "@/shared/consts/consts";
import { useAuthorization } from "@/shared/hooks/useAuthorization";
import { useSearchParams } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { Button } from "@ui/Button/Button";
import { ShikimoriIcon } from "@/shared/icons";
import { ImageView } from "@ui/ImageView/ImageView";

export const LoginPage = () => {
	const [searchParams] = useSearchParams();
	const { fetchTokens } = useAuthorization();
	const code = searchParams.get("code");

	const getAndSaveTokens = async (code: string) => {
		const response = await fetchTokens(code);
		if (response) {
			localStorage.setItem("access_token", response.access_token);
			localStorage.setItem("refresh_token", response.refresh_token);
			window.open(CONSTS.URL, "_self");
		}
	};

	if (code) {
		getAndSaveTokens(code);
	}

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
					Lite mode - option that does not require authorization, but has a
					number of limitations and errors.
				</span>
			</div>
		</div>
	);
};
