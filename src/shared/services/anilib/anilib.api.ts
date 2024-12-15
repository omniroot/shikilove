import axios from "axios";
import { IAnilibEpisode, IAnilibVideo, IAnimelibSearch } from "./anilib.interface.ts";

export const anilibApi = {
	searchAnime: async (name: string) => {
		const { data } = await axios.get<{ data: IAnimelibSearch[] }>(
			`https://api.mangalib.me/api/anime?fields[]=rate_avg&fields[]=rate&fields[]=releaseDate&q=${name}`,
		);
		console.log(data.data);
		return data.data;
	},
	getAnimeByName: async (name: string) => {
		const results = await anilibApi.searchAnime(name);
		return results[0];
	},

	getEpisodesById: async (animeSlugUrl: string) => {
		const { data } = await axios.get<{ data: IAnilibEpisode[] }>(
			`https://api2.mangalib.me/api/episodes?anime_id=${animeSlugUrl}`,
		);
		return data.data;
	},

	getVideosByEpisodeId: async (episodeId: number) => {
		const { data } = await axios.get<{
			data: IAnilibVideo;
		}>(`https://api2.mangalib.me/api/episodes/${episodeId}`);
		const info = data.data;
		return info.players;
	},
};
