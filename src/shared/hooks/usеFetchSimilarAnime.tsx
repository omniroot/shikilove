import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://shikimori.one/api/",
  headers: {
    "User-Agent": "ShikiLove",
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

interface IResponse {
  id: string;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  kind: string;
  score: string;
  status: string;
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  released_on: string;
}

export const useFetchSimilarAnime = (animeId: string) => {
  const [response, setResponse] = useState<IResponse[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const _response = await api.get<IResponse[]>(`animes/${animeId}/similar`);
      if (_response.data) {
        setResponse(_response.data);
      }
    };
    fetchData();
  }, [animeId]);

  return { similarAnimes: response };
};
