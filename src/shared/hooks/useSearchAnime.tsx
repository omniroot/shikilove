import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_SEARCH_ANIME = gql`
query($name: String)  {
  animes(search: $name, limit: 15, kind: "!special") {
    id
    name
    poster {
      main2xUrl
    }
  }
}`;

interface IResponse {
  animes: {
    id: string;
    name: string;
    poster: {
      main2xUrl: string;
    };
  }[];
}

export const useSearchAnime = () => {
  const [name, setName] = useState("naruto");
  const { loading, data, error } = useQuery<IResponse>(GET_SEARCH_ANIME, {
    variables: { name: name },
  });

  if (loading) {
    return { loading: loading, error: error };
  }
  if (error) {
    return { loading: loading, error: error };
  }

  if (!data) return { loading: loading, error: error };
  const searchAnime = (name = "naruto") => {
    setName(name);
  };

  return { searchAnime, loading: loading, error: error, animes: data.animes };
};
