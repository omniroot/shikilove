import { CONSTS } from "@/shared/consts/consts.ts";
import axios from "axios";

const _shikimoriAuth = axios.create({
	baseURL: "https://shikimori.one/",
	headers: {
		"User-Agent": CONSTS.USER_AGENT,
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export interface IAuthTokens {
	access_token: string;
	refresh_token: string;
}

export const authApi = {
	getCurrentUserId: async () => {
		try {
			const response = await axios.get<{ id: string }>("https://shikimori.one/api/users/whoami", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			});
			console.log("GetCurrentUserID:  ", response);
			return response.data.id;
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	fetchTokens: async (authorizationCode: string) => {
		try {
			const response = await _shikimoriAuth.post<IAuthTokens>("oauth/token", {
				grant_type: "authorization_code",
				client_id: CONSTS.OAUTH_CLIENT_ID,
				client_secret: CONSTS.OAUTH_CLIENT_SECRET,
				code: String(authorizationCode),
				redirect_uri: CONSTS.OAUTH_REDIRECT_URI,
			});
			if (response.data) {
				return {
					access_token: response.data.access_token,
					refresh_token: response.data.refresh_token,
				};
			}
		} catch (error) {
			console.log("Error while login", error);
		}
	},

	refreshTokens: async (refresh_token: string) => {
		try {
			const response = await _shikimoriAuth.post<IAuthTokens>("oauth/token", {
				grant_type: "refresh_token",
				client_id: CONSTS.OAUTH_CLIENT_ID,
				client_secret: CONSTS.OAUTH_CLIENT_SECRET,
				refresh_token: refresh_token,
			});
			if (response.data) {
				return {
					access_token: response.data.access_token,
					refresh_token: response.data.refresh_token,
				};
			}
		} catch (error) {
			console.log("Error while refreshing tokens", error);
		}
	},
};
