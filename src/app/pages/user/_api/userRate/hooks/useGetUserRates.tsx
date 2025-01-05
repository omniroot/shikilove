import { userRateApi } from "@pages/user/_api/userRate/index.ts";
import { IUserRateStatus, IUserRates } from "@pages/user/_api/userRate/userRate.interface.ts";
import { useInfiniteQuery } from "@tanstack/react-query";

interface IUseUserRateProps {
	userId?: number;
	userRateStatus?: IUserRateStatus;
}

const currentUserId = Number(localStorage.getItem("user_id")) || 0;
export const useGetUserRates = ({
	userId = currentUserId,
	userRateStatus = "watching",
}: IUseUserRateProps) => {
	return useInfiniteQuery<IUserRates, Error>({
		queryKey: ["getUserRates", userId, userRateStatus],
		queryFn: async ({ pageParam = 1 }) => {
			const response = await userRateApi.getUserRates({
				userId,
				page: pageParam as number,
				limit: 15,
				status: userRateStatus,
			});
			return response.userRates;
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			return lastPage.length === 15 ? pages.length + 1 : undefined;
		},
	});

	// const { mutate: addUserRate } = useMutation<IUserRate, unknown, IUserRateAdd>({
	// 	mutationKey: ["addUserRate", userRateId],
	// 	mutationFn: (variables) => userRateApi.addUserRate(variables),
	// 	onSuccess: () => {
	// 		queryClient.invalidateQueries({ queryKey: ["getAnime"] });
	// 		queryClient.invalidateQueries({ queryKey: ["userRates"] });
	// 	},
	// });

	// const { mutate: updateUserRate } = useMutation<IUserRate, unknown, IUserRateUpdate>({
	// 	mutationKey: ["updateUserRate", userRateId],
	// 	mutationFn: (variables) => userRateApi.updateUserRate(variables),
	// 	onSuccess: () => {
	// 		queryClient.invalidateQueries({ queryKey: ["getAnime"] });
	// 		queryClient.invalidateQueries({ queryKey: ["userRates"] });
	// 	},
	// });

	// const { mutate: deleteUserRate } = useMutation<IUserRate, unknown, IUserRateDelete>({
	// 	mutationKey: ["deleteToUserRate", userRateId],
	// 	mutationFn: (variables) => userRateApi.deleteUserRate(variables),
	// 	onSuccess: () => {
	// 		queryClient.invalidateQueries({ queryKey: ["getAnime"] });
	// 		queryClient.invalidateQueries({ queryKey: ["userRates"] });
	// 	},
	// });

	// const addToUserRate = useMutation<IResponse, unknown, IAddToUserRate>({
	// 	mutationKey: ["addToUserRate"],
	// 	mutationFn: async ({ animeId, status }) => {
	// 		const response = await api.post("v2/user_rates", {
	// 			user_rate: {
	// 				target_type: "Anime",
	// 				target_id: animeId,
	// 				user_id: localStorage.getItem("user_id"),
	// 				status: status,
	// 			},
	// 		});
	// 		const { data } = response;
	// 		console.log(data);
	// 		return data;
	// 	},
	// 	onSuccess: (_, { animeId }) => {
	// 		queryClient.invalidateQueries({ queryKey: ["userRates"] });
	// 		queryClient.invalidateQueries({ queryKey: ["animeById", animeId] });
	// 	},
	// });
};
