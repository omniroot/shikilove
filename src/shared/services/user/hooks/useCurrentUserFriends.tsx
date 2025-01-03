import { userApi } from "@/shared/services/user/user.api.ts";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUserFriends = () => {
	const {
		isFetching: isCurrentUserFriendsLoading,
		data: currentUserFriends,
		error: currentUserFriendsError,
	} = useQuery({
		queryKey: ["currentUserFriends"],
		queryFn: () => userApi.getCurrentUserFriends(),
	});

	// console.log("currentUser", currentUser);

	return {
		currentUserFriends,
		isCurrentUserFriendsLoading,
		currentUserFriendsError,
	};
};
