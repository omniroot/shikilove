const ANIME_QUERY = `
			
`;

export const GET_ANIME_BY_ID = `
	query ($ids: String) {
		animes(ids: $ids, limit: 1) {
			${ANIME_QUERY}
		}
	}
`;

export const GET_ANIME_ONGOINGS = `
	query () {
		animes(limit: 10, status: "ongoing") {
			${ANIME_QUERY}
		}
	}
`;

export const GET_ANIME_LATESTS = `
	query () {
		animes(limit: 10, status: "latest") {
			${ANIME_QUERY}
		}
	}
`;
