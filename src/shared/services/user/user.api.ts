import { api } from "@/shared/services/api.ts";
import { IFriend, IUser } from "@/shared/services/user/user.interface.ts";
import axios from "axios";

export const userApi = {
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
	getCurrentUser: async () => {
		try {
			const response = await api.get<IUser>(`users/${localStorage.getItem("user_id")}`);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	},

	getCurrentUserFriends: async () => {
		try {
			const response = await api.get<IFriend[]>(`users/${localStorage.getItem("user_id")}/friends`);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	},

	getUser: async (userId: number) => {
		try {
			const response = await api.get<IUser>(`users/${userId}`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
};
