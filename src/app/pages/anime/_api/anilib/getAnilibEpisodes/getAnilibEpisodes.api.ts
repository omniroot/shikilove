import { IAnilibEpisode } from "@pages/anime/_api/anilib/getAnilibEpisodes/getAnilibEpisodes.types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

interface IGetAnilibEpisodes {
	slugUrl: string;
	config?: AxiosRequestConfig;
}

interface IUseGetAnilibEpisodes {
	slugUrl: string;
	config?: UseQueryOptions<IAnilibEpisode[]>;
}

export const getAnilibEpisodes = ({ slugUrl, config }: IGetAnilibEpisodes) => {
	return axios.get<{ data: IAnilibEpisode[] }>(
		`https://api2.mangalib.me/api/episodes?anime_id=${slugUrl}`,
		config,
	);
};

export const useGetAnilibEpisodes = ({ slugUrl, config }: IUseGetAnilibEpisodes) => {
	return useQuery({
		queryKey: ["anilib-get-episodes", slugUrl],
		queryFn: async () => {
			const response = await getAnilibEpisodes({ slugUrl });
			return response.data.data;
		},
		...config,
	});
};
