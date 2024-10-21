import { api } from "@/shared/services/api";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface";

export const useChangeAnimeUserRate = () => {
	const changeAnimeUserStatus = async (
		userRateId: number,
		status: IUserRateAnimeStatus,
	) => {
		const response = await api.patch(`v2/user_rates/${userRateId}`, {
			status: status,
		});
		console.log("@ change status to ", status);
		const { data } = response;
		if (!data) return response;
		return data;
	};

	const changeAnimeUserEpisodes = async (
		userRateId: number,
		episodes: number,
	) => {
		const response = await api.patch(`v2/user_rates/${userRateId}`, {
			episodes: episodes,
		});
		console.log("@ change episodes to ", episodes);
		const { data } = response;
		if (!data) return response;
		return data;
	};

	return { changeAnimeUserStatus, changeAnimeUserEpisodes };
};
