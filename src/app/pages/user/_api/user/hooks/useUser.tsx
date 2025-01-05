import { userApi } from "@pages/user/_api/user/user.api.ts";
import { IUser } from "@pages/user/_api/user/user.interface.ts";
import { useQuery } from "@tanstack/react-query";

const currentUserId = Number(localStorage.getItem("user_id")) || 0;
export const useUser = (userId: number = currentUserId) => {
	return useQuery<IUser>({
		queryKey: ["user", userId],
		queryFn: async () => {
			const response = await userApi.getUser(userId);
			return response.data;
		},
	});
};
