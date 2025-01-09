import { IAnime, IAnimeGet } from "@/shared/services/anime/anime.interface.ts";
import { getAnime } from "@/shared/services/anime/getAnime/getAnime.ts";
import {
	IAnimeFranchise,
	IAnimeFranchisesResponse,
} from "@/shared/services/anime/getAnimeFranchise/getAnimeFranchise.types";
import { api } from "@/shared/services/api.ts";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

interface IGetAnimeFranchise {
	animeId: string;
	config?: AxiosRequestConfig;
}

interface IUseGetAnimeFranchise {
	animeId: string;
	config?: UseQueryOptions<IAnimeFranchise[]>;
}

export const getAnimeFranchise = ({ animeId }: IGetAnimeFranchise) => {
	return api.get<IAnimeFranchisesResponse>(`animes/${animeId}/franchise`);
};

export const useGetAnimeFranchise = ({ animeId, config }: IUseGetAnimeFranchise) => {
	return useQuery<IAnimeFranchise[]>({
		queryKey: ["getAnimeFranchise", animeId],
		queryFn: async () => {
			const reponse = await getAnimeFranchise({ animeId });
			return reponse.data.nodes;
		},
		...config,
	});
};
