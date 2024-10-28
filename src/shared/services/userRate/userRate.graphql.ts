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
