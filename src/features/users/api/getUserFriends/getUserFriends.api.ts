import { api } from "@/shared/services/api.ts";
import { IFriend } from "./getUserFriends.types.ts";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

interface IGetUserFriends {
	userId: number;
	config?: AxiosRequestConfig;
}

interface IUseGetUserFriends {
	userId?: number;
	config?: UseQueryOptions<IFriend[]>;
}

export const getUserFriends = ({ userId, config }: IGetUserFriends) => {
	return api.get<IFriend[]>(`users/${userId}/friends`, config);
};

export const useGetUserFriends = ({ userId, config }: IUseGetUserFriends = {}) => {
	if (!userId) {
		userId = Number(localStorage.getItem("user_id"));
	}
	return useQuery<IFriend[]>({
		queryKey: ["getUserFriends", userId],
		queryFn: async () => {
			const response = await getUserFriends({ userId });
			return response.data;
		},
		...config,
	});
};
