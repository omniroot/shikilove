import { IFriend, userApi } from "@pages/user/_api/user";
import { useQuery } from "@tanstack/react-query";

const currentUserId = Number(localStorage.getItem("user_id")) || 0;
export const useUserFriends = (userId: number = currentUserId) => {
	return useQuery<IFriend[]>({
		queryKey: ["userFriends", userId],
		queryFn: async () => {
			const response = await userApi.getUserFriends(userId);
			return response.data;
		},
	});
};
