import { gql } from "graphql-request";

export const userRatesQuery = `
  query {
  userRates(limit: 15, targetType: Anime) {
    anime {
      id
      name
      russian
      english
      poster {
        mini2xUrl # 9 kb (preview anime poster)
        originalUrl # 112 kb (full anime poster)
      }
      episodes
    }
    id
    chapters
    episodes
    status
  }
}
`;

export const animeInfoQuery = gql`
  query ($ids: String) {
    animes(ids: $ids) {
      id
      name
      russian
      english
      status
      description
      episodes
      duration
      franchise
      releasedOn {
        year
      }
      screenshots {
        originalUrl
        x166Url
      }
      genres {
        russian
      }
      rating
      poster {
        originalUrl
      }
      related {
        id
      }
      score
      scoresStats {
        count
        score
      }
      userRate {
        id
        episodes
        status
      }
    }
  }
`;
