import { authApi } from "@/shared/services/auth/auth.api.ts";
import { useAuthStore } from "@/shared/store/auth.store.tsx";
import { saveTokens } from "@/shared/utils/saveTokens.ts";
import { useNavigate } from "@tanstack/react-router";
import { useLayoutEffect } from "react";

export const useAuth = () => {
	const { isAuthorized, setIsAuthorized, userId, setUserId } = useAuthStore();
	const navigate = useNavigate();

	useLayoutEffect(() => {
		const userId = localStorage.getItem("user_id");
		if (userId) {
			setUserId(Number(userId));
			setIsAuthorized(true);
		}
	}, []);

	const login = async (code: string) => {
		// fetch tokens
		const tokens = await authApi.fetchTokens(code);
		if (!tokens) {
			console.log("Tokens not received");
			return false;
		}
		saveTokens(tokens);

		// fetch current user id
		const userId = await authApi.getCurrentUserId();
		if (!userId) {
			console.log("user with new token not received");
			return;
		}
		setUserId(Number(userId));
		setIsAuthorized(true);
		navigate({ to: "/users/$userId", params: { userId: userId } });
	};

	return { isAuthorized, userId, login };
};
