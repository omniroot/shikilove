import { authApi } from "@/shared/services/auth/auth.api.ts";
import { useAuthStore } from "@/shared/store/auth.store.tsx";
import { saveTokens } from "@/shared/utils/saveTokens.ts";
import { userApi } from "@pages/user/_api/user/user.api.ts";
import { useNavigate } from "@tanstack/react-router";
import { useLayoutEffect } from "react";

const fetchTokens = async (code: string) => {
	const tokens = await authApi.fetchTokens(code);
	if (!tokens) {
		console.log("Tokens not received");
		return false;
	}
	saveTokens(tokens);
	return tokens;
};

const fetchCurrentUserId = async () => {
	const userId = await userApi.getCurrentUserId();
	if (!userId) {
		console.log("user with new token not received");
		return;
	}
	return userId;
};

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
		const tokens = await fetchTokens(code);
		if (!tokens) return;
		const userId = await fetchCurrentUserId();
		if (!userId) return;
		setUserId(Number(userId));
		setIsAuthorized(true);
		navigate({ to: "/users/$userId", params: { userId: userId } });
	};

	return { isAuthorized, userId, login };
};
