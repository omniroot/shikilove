export const GET_USER_RATES = `
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
		}
	}
`;
