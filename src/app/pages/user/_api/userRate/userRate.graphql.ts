export const GET_USER_RATES = `
query($page:PositiveInt, $limit:PositiveInt, $status:UserRateStatusEnum, $userId:ID) {
		userRates(
			page: $page,
			limit: $limit,
			targetType: Anime,
			status: $status,
			userId: $userId,
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
