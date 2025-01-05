import { api } from "@/shared/services/api.ts";
import { IUser, IFriend } from "./user.interface.ts";
import axios, { AxiosRequestConfig } from "axios";

export const userApi = {
	getUser: async (userId: number, config?: AxiosRequestConfig) => {
		return api.get<IUser>(`users/${userId}`, config);
	},

	getUserFriends: (userId: number, config?: AxiosRequestConfig) => {
		try {
			return api.get<IFriend[]>(`users/${userId}/friends`, config);
		} catch (error) {
			console.log(error);
			throw error;
		}
	},

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
};
