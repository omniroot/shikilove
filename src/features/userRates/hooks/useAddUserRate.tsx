// import { IUserRate, IUserRateAdd, userRateApi } from "@pages/user/_api/userRate/index.ts";
// import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// interface IUseAddUserRateProps {
// 	userId?: number;
// 	config?: UseMutationOptions<IUserRate, unknown, IUserRateAdd, unknown>;
// }

// const currentUserId = Number(localStorage.getItem("user_id")) || 0;
// export const useAddUserRate = ({ userId = currentUserId, config }: IUseAddUserRateProps) => {
// 	return useMutation<IUserRate, unknown, IUserRateAdd>({
// 		mutationKey: ["addUserRate", userId],
// 		mutationFn: async (variables) => {
// 			const response = await userRateApi.addUserRate(variables);
// 			return response.data;
// 		},
// 		...config,
// 	});
// };

// // const { mutate: updateUserRate } = useMutation<IUserRate, unknown, IUserRateUpdate>({
// // 	mutationKey: ["updateUserRate", userRateId],
// // 	mutationFn: (variables) => userRateApi.updateUserRate(variables),
// // 	onSuccess: () => {
// // 		queryClient.invalidateQueries({ queryKey: ["getAnime"] });
// // 		queryClient.invalidateQueries({ queryKey: ["userRates"] });
// // 	},
// // });

// // const { mutate: deleteUserRate } = useMutation<IUserRate, unknown, IUserRateDelete>({
// // 	mutationKey: ["deleteToUserRate", userRateId],
// // 	mutationFn: (variables) => userRateApi.deleteUserRate(variables),
// // 	onSuccess: () => {
// // 		queryClient.invalidateQueries({ queryKey: ["getAnime"] });
// // 		queryClient.invalidateQueries({ queryKey: ["userRates"] });
// // 	},
// // });

// // const addToUserRate = useMutation<IResponse, unknown, IAddToUserRate>({
// // 	mutationKey: ["addToUserRate"],
// // 	mutationFn: async ({ animeId, status }) => {
// // 		const response = await api.post("v2/user_rates", {
// // 			user_rate: {
// // 				target_type: "Anime",
// // 				target_id: animeId,
// // 				user_id: localStorage.getItem("user_id"),
// // 				status: status,
// // 			},
// // 		});
// // 		const { data } = response;
// // 		console.log(data);
// // 		return data;
// // 	},
// // 	onSuccess: (_, { animeId }) => {
// // 		queryClient.invalidateQueries({ queryKey: ["userRates"] });
// // 		queryClient.invalidateQueries({ queryKey: ["animeById", animeId] });
// // 	},
// // });
