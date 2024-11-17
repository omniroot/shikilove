import { api } from "@/shared/services/api.ts";
import { IUser } from "@/shared/services/user/user.interface.ts";

export const userApi = {
	getCurrentUserId: async () => {
		try {
			const response = await api.get<{ id: string }>("users/whoami");
			console.log("GetCurrentUserID:  ", response);
			return response.data.id;
		} catch (error) {
			console.log(error);
		}
	},
	getCurrentUser: async () => {
		try {
			const response = await api.get<IUser>(`users/${localStorage.getItem("user_id")}`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
};
