import { CONSTS } from "@/shared/consts/consts.ts";
import { api } from "@/shared/services/api.ts";
import { GET_CURRENT_USER } from "@/shared/services/auth/auth.graphql.ts";
import { IAuthResponse, IFullCurrentUser } from "@/shared/services/auth/auth.interface.ts";
import { graphql } from "@/shared/services/graphql.ts";
import { saveTokens } from "@/shared/utils/saveTokens.ts";
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
	getCurrentUser: async () => {
		try {
			const response = await graphql<IAuthResponse>(GET_CURRENT_USER);
			const { currentUser } = response;
			return currentUser;
		} catch (error) {
			if (error) {
				const refresh_token = localStorage.getItem("refresh_token") || null;
				if (refresh_token) {
					console.log("Refresh token exist, refreshing...");
					const response = await authApi.refreshTokens(refresh_token);
					if (response) {
						saveTokens(response);
						window.location.reload();
					}
				}
				console.log("Refresh token not found, redirecting to login...");
				throw error;
			}
		}
	},
	getFullCurrentUser: async () => {
		try {
			const response = await api.get<IFullCurrentUser>(`users/${localStorage.getItem("user_id")}`);
			return response.data;
		} catch (error) {
			if (error) throw error;
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
