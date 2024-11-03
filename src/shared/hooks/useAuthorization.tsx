import { authApi } from "@/shared/services/auth/auth.api.ts";
import { useQuery } from "@tanstack/react-query";

export const useAuthorization = () => {
	const {
		isLoading: isCurrentUserLoading,
		data: currentUser,
		error: currentUserError,
	} = useQuery({
		queryKey: ["currentUser"],
		queryFn: () => authApi.getCurrentUser(),
	});

	const {
		isLoading: isFullCurrentUserLoading,
		data: fullCurrentUser,
		error: fullCurrentUserError,
	} = useQuery({
		queryKey: ["fullCurrentUser"],
		queryFn: () => authApi.getFullCurrentUser(),
	});

	return {
		isCurrentUserLoading,
		currentUser,
		currentUserError,

		isFullCurrentUserLoading,
		fullCurrentUser,
		fullCurrentUserError,
	};
};
