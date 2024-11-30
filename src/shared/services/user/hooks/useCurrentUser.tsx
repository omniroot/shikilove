import { userApi } from "@/shared/services/user/user.api.ts";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
	const {
		isFetching: isCurrentUserLoading,
		data: currentUser,
		error: currentUserError,
	} = useQuery({
		queryKey: ["currentUser"],
		queryFn: () => userApi.getCurrentUser(),
	});

	// console.log("currentUser", currentUser);

	return {
		currentUser,
		isCurrentUserLoading,
		currentUserError,
	};
};
