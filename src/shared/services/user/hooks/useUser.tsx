import { userApi } from "@/shared/services/user/user.api.ts";
import { useQuery } from "@tanstack/react-query";

export const useUser = (userId: number = 0) => {
	const {
		isFetching: isUserLoading,
		data: user,
		error: userError,
	} = useQuery({
		queryKey: ["user", userId],
		queryFn: () => userApi.getUser(userId),
	});

	// console.log("currentUser", currentUser);

	return {
		user,
		isUserLoading,
		userError,
	};
};
