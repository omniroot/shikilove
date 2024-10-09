import { gql, useQuery } from "@apollo/client";

const GET_USER_RATES = gql`
  {
    userRates(
      page: 1
      limit: 30
      targetType: Anime
      order: { field: updated_at, order: desc }
    ) {
      id
      anime {
        id
        name
        poster {
          main2xUrl
        }
      }
      status
      createdAt
    }
  }
`;

interface IUserRate {
  id: string;
  anime: {
    id: string;
    name: string;
    poster: {
      main2xUrl: string;
    };
  };
  status: string;
  createdAt: string;
}

interface IResponse {
  userRates: IUserRate[];
}

export const useFetchUserRates = () => {
  const { loading, data, error } = useQuery<IResponse>(GET_USER_RATES);

  console.log(data);
  if (!data?.userRates) return { data, loading: loading, error: error };
  return { userRates: data.userRates, loading: loading, error: error };
};
