import { CONSTS } from "@/shared/consts/consts.ts";
import { authApi } from "@/shared/services/auth/auth.api.ts";
import { saveTokens } from "@/shared/utils/saveTokens.ts";
import { userApi } from "@pages/user/_api/user";
import { useQuery } from "@tanstack/react-query";

export const useAuthorization = (code?: string) => {
	const {
		data: auth,
		isFetching: authLoading,
		error: authError,
		refetch: fetchAuth,
	} = useQuery({
		queryKey: ["auth"],
		queryFn: async () => {
			if (code && code?.length > 1) {
				const tokens = await authApi.fetchTokens(code);
				if (!tokens) {
					console.log("Tokens not received", tokens);
					return;
				}
				saveTokens(tokens);
				const userId = await userApi.getCurrentUserId();
				if (!userId) {
					console.log("user with ne wtokent not recived");
					return;
				}
				localStorage.setItem("user_id", String(userId));
				console.log("user id", userId);
				window.open(CONSTS.URL, "_self");
			}
		},
		enabled: false,
	});

	return {
		auth,
		authLoading,
		authError,
		fetchAuth,
	};
};
