import { api } from "@/shared/services/api.ts";
import { IUser } from "./getUser.types.ts";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

interface IGetUser {
	userId: number;
	config?: AxiosRequestConfig;
}

interface IUseGetUser {
	userId?: number;
	config?: UseQueryOptions<IUser>;
}

export const getUser = ({ userId, config }: IGetUser) => {
	return api.get<IUser>(`users/${userId}`, config);
};

export const useGetUser = ({ userId, config }: IUseGetUser = {}) => {
	if (!userId) {
		userId = Number(localStorage.getItem("user_id"));
	}
	return useQuery<IUser>({
		queryKey: ["getUser", userId],
		queryFn: async () => {
			const response = await getUser({ userId });
			return response.data;
		},
		...config,
	});
};
