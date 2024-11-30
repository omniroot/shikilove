export const GET_USER_RATES = `
query($page:PositiveInt, $limit:PositiveInt) {
		userRates(
			page: $page,
			limit: $limit,
			targetType: Anime,
			order: { field: updated_at, order: desc }
		) {
			id
			anime {
				id
				name
				russian
        episodes
        episodesAired
				score
				kind
				releasedOn {
        	year
      	}
				airedOn {
					year
				}
				poster {
					main2xUrl
				}
			}
			episodes
			status
			createdAt
			score
		}
	}
`;
