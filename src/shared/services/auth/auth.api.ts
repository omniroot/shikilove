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

_shikimoriAuth.interceptors.request.use(
	(config) => {
		console.log("Request: ", {
			method: config.method,
			url: config.url,
			data: config.data,
			headers: config.headers,
		});
		return config;
	},
	(error) => {
		console.log("Request error: ", error);
		return Promise.reject(error);
	},
);

_shikimoriAuth.interceptors.response.use(
	(response) => {
		console.log("Response: ", {
			status: response.status,
			statusText: response.statusText,
			data: response.data,
		});
		return response;
	},
	(error) => {
		console.log("Response error: ", error);
		return Promise.reject(error);
	},
);

// REFRESH TOKENS
// if (refresh_token) {
// 	console.log("Refresh token exist, refreshing...");
// 	const response = await authApi.refreshTokens(refresh_token);
// 	if (response) {
// 		saveTokens(response);
// 		window.location.reload();
// 	}
// }

export interface IAuthTokens {
	access_token: string;
	refresh_token: string;
}

export const authApi = {
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
