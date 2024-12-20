import { userRateApi } from "@/shared/services/userRate/userRate.api.ts";
import {
	IUserRate,
	IUserRateAdd,
	IUserRateDelete,
	IUserRates,
	IUserRateUpdate,
} from "@/shared/services/userRate/userRate.interface.ts";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface IUseUserRateProps {
	userRateStatus: IUserRateAnimeStatus;
	userRateId?: number;
}
export const useUserRate = ({ userRateStatus, userRateId }: IUseUserRateProps) => {
	const queryClient = useQueryClient();
	const {
		isLoading: isUserRatesLoading,
		data: userRates,
		error: userRatesError,
		fetchNextPage: fetchNextUserRatesPage,
	} = useInfiniteQuery<IUserRates, Error>({
		queryKey: ["userRates", userRateStatus],
		queryFn: async ({ pageParam }) => {
			// const cachedData = queryClient.getQueryData<IUserRates>([
			// 	"userRates",
			// 	userRateStatus,
			// 	userRatePage,
			// ]);
			// if (cachedData) {
			// 	console.log({ cachedData });
			// 	// @ts-ignore
			// 	return cachedData.pages[0]; // Возвращаем закешированные данные
			// }
			const res = await userRateApi.getUserRates({
				page: pageParam as number,
				limit: 15,
				status: userRateStatus,
			});
			console.log({ res });
			return res;
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			return lastPage.length === 15 ? pages.length + 1 : undefined;
		},
		refetchOnMount: false,
		retryOnMount: false,
	});

	const { mutate: addUserRate } = useMutation<IUserRate, unknown, IUserRateAdd>({
		mutationKey: ["addUserRate", userRateId],
		mutationFn: (variables) => userRateApi.addUserRate(variables),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getAnime"] });
			queryClient.invalidateQueries({ queryKey: ["userRates"] });
		},
	});

	const { mutate: updateUserRate } = useMutation<IUserRate, unknown, IUserRateUpdate>({
		mutationKey: ["updateUserRate", userRateId],
		mutationFn: (variables) => userRateApi.updateUserRate(variables),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getAnime"] });
			queryClient.invalidateQueries({ queryKey: ["userRates"] });
		},
	});

	const { mutate: deleteUserRate } = useMutation<IUserRate, unknown, IUserRateDelete>({
		mutationKey: ["deleteToUserRate", userRateId],
		mutationFn: (variables) => userRateApi.deleteUserRate(variables),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getAnime"] });
			queryClient.invalidateQueries({ queryKey: ["userRates"] });
		},
	});

	return {
		isUserRatesLoading,
		userRates,
		userRatesError,
		fetchNextUserRatesPage,
		addUserRate,
		updateUserRate,
		deleteUserRate,
	};

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
