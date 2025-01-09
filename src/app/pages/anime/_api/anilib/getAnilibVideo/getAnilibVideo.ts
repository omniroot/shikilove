import {
	IAnilibAnimeLibPlayer,
	IAnilibKodikPlayer,
	IAnilibVideo,
} from "@pages/anime/_api/anilib/getAnilibVideo/getAnilibVideo.types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

interface IGetAnilibVideo {
	episodeId: number;
	config?: AxiosRequestConfig;
}

interface IUseGetAnilibVideo {
	episodeId: number;
	config?: UseQueryOptions<IAnilibKodikPlayer[] | IAnilibAnimeLibPlayer[]>;
}

export const getAnilibVideo = ({ episodeId, config }: IGetAnilibVideo) => {
	return axios.get<{
		data: IAnilibVideo;
	}>(`https://api2.mangalib.me/api/episodes/${episodeId}`, config);
};

export const useGetAnilibVideo = ({ episodeId, config }: IUseGetAnilibVideo) => {
	return useQuery<IAnilibKodikPlayer[] | IAnilibAnimeLibPlayer[]>({
		queryKey: ["anilib-get-video", episodeId],
		queryFn: async () => {
			const response = await getAnilibVideo({ episodeId });
			return response.data.data.players;
		},
		...config,
	});
};
