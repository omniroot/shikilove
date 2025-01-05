import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { IUserRate, IUserRateUpdate, userRateApi } from "@pages/user/_api/userRate/index.ts";
import { useMutation, UseMutationOptions, useQueryClient } from "@tanstack/react-query";

interface IUseUpdateUserRateProps {
	userRateId: number;
	config?: UseMutationOptions<IUserRate, unknown, IUserRateUpdate, unknown>;
}

export const useUpdateUserRate = ({ userRateId, config }: IUseUpdateUserRateProps) => {
	const queryClient = useQueryClient();
	return useMutation<IUserRate, unknown, IUserRateUpdate>({
		mutationKey: ["updateUserRate", userRateId],
		mutationFn: async (variables) => {
			const response = await userRateApi.updateUserRate(variables);
			return response.data;
		},
		onSuccess: (response) => {
			queryClient.setQueryData<IAnime>(["getAnime", response.anime.id], (old) => {
				if (old) {
					return {
						...old,
						userRate: {
							...old.userRate,
							episodes: response.episodes,
							status: response.status,
						},
					};
				}
			});
			return response;
		},
		onSettled: (response) => {
			console.log({ response });

			queryClient.invalidateQueries({ queryKey: ["getAnime"] });
		},
		...config,
	});
};

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
