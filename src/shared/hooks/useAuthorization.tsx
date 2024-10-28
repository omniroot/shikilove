import { authApi } from "@/shared/services/auth/auth.api.ts";
import { useQuery } from "@tanstack/react-query";

export const useAuthorization = () => {
	const {
		isLoading: isCurrentUserLoading,
		data: currentUser,
		error: currentUserError,
	} = useQuery({
		queryKey: ["auth"],
		queryFn: () => authApi.getCurrentUser(),
	});

	return {
		isCurrentUserLoading,
		currentUser,
		currentUserError,
	};
};
