import { CONSTS } from "@/shared/consts/consts";
import { useAuthorization } from "@/shared/hooks/useAuthorization";
import { Box } from "@ui/Box/Box";
import { Button } from "@ui/Button/Button";
import { Typography } from "@ui/Typography/Typography";
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
		<Box
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			gap="2"
			padding="2"
			width="100%"
			height="100%"
		>
			<Typography size="1">LoginPage</Typography>
			<Box
				width="100%"
				height="100%"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				gap="1"
			>
				<Typography size="3">Login with</Typography>
				<Button onClick={onLoginButtonClick}>Shikimori</Button>
			</Box>
		</Box>
	);
};
