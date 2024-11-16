import { api } from "@/shared/services/api.ts";
import { IUser } from "@/shared/services/user/user.interface.ts";

export const userApi = {
	getCurrentUser: async () => {
		try {
			const response = await api.get<IUser>(`users/${localStorage.getItem("user_id")}`);
			return response.data;
		} catch (error) {
			if (error) throw error;
		}
	},
};
