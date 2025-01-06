import { animeApi } from "@/shared/services/anime/anime.api.ts";
import { IAnimeFranchise } from "@/shared/services/anime/anime.interface.ts";
import { useQuery } from "@tanstack/react-query";

export const useAnimeFranchises = (animeId: string) => {
	return useQuery<IAnimeFranchise[]>({
		queryKey: ["getAnimeFranchises", animeId],
		queryFn: () => animeApi.getAnimeFranchises({ animeId }),
	});
};
