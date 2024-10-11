import { CONSTS } from "@/shared/consts/consts";
import { useAuthorization } from "@/shared/hooks/useAuthorization";
import { useSearchParams } from "react-router-dom";

export const LoginPage = () => {
	const [searchParams, _setSearchParams] = useSearchParams();
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
	return (
		<div>
			<span>LoginPage</span>
			<div>
				<span>Login with</span>
				<button onClick={onLoginButtonClick}>Shikimori</button>
			</div>
		</div>
	);
};
