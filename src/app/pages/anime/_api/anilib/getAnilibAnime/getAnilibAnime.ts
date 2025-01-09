import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";
import { IAnimelibSearch } from "./getAnilibAnime.types.ts";

interface IGetAnilibAnime {
	name: string;
	config?: AxiosRequestConfig;
}

interface IUseGetAnilibAnime {
	name: string;
	config?: UseQueryOptions<IAnimelibSearch[]>;
}

export const getAnilibAnime = ({ name, config }: IGetAnilibAnime) => {
	return axios.get<{ data: IAnimelibSearch[] }>(
		`https://api.mangalib.me/api/anime?fields[]=rate_avg&fields[]=rate&fields[]=releaseDate&q=${name}`,
		config,
	);
};

export const useGetAnilibAnime = ({ name, config }: IUseGetAnilibAnime) => {
	return useQuery<IAnimelibSearch[]>({
		queryKey: ["anilib-get-anime-by-name", name],
		queryFn: async () => {
			const reponse = await getAnilibAnime({ name });

			return reponse.data.data;
		},
		...config,
	});
};
