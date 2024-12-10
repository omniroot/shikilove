import axios from "axios";
import {
  IAnilibEpisode,
  IAnilibVideo,
  IAnimelibSearch,
} from "./anilib.interface.ts";

export const anilibApi = {
  searchAnime: async (name: string) => {
    const { data } = await axios.get<{ data: IAnimelibSearch[] }>(
      `https://api.mangalib.me/api/anime?fields[]=rate_avg&fields[]=rate&fields[]=releaseDate&q=${name}`
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
      `https://api2.mangalib.me/api/episodes?anime_id=${animeSlugUrl}`
    );
    return data.data;
  },

  getVideosByEpisodeId: async (
    episodeId: number,
    player: "kodik" | "animelib" = "animelib"
  ) => {
    const { data } = await axios.get<{
      data: IAnilibVideo;
    }>(`https://api2.mangalib.me/api/episodes/${episodeId}`);
    const info = data.data;
    if (player === "animelib") {
      const players = info.players.filter(
        (player) => player.player === "Animelib"
      );
      const videos = players.map((player) => {
        return {
          type: player.translation_type.label,
          team: player.team.name,
          videos: player.video.quality.map((quality) => {
            return {
              quality: quality.quality,
              link: `https://video1.anilib.me/.%D0%B0s/${quality.href}`,
            };
          }),
        };
      });
      return videos;
    }
  },
};
