const ANIME_QUERY = `
			id
			name
			russian
			kind
			rating
			score
			status
			episodes
			episodesAired
			duration
			airedOn {
				year
				month
				day
				date
			}
			releasedOn {
				year
				month
				day
				date
			}
			url
			poster {
				id
				originalUrl
				mainUrl
			}
			licensors
			createdAt
			updatedAt

			genres {
				id
				name
				russian
				kind
			}
			studios {
				id
				name
				imageUrl
			}

			related {
				id
				anime {
					id
					name
				}
				manga {
					id
					name
				}
				relationKind
				relationText
			}

			# videos { id url name kind playerUrl imageUrl }
			screenshots {
				id
				originalUrl
				x166Url
				x332Url
			}

			scoresStats {
				score
				count
			}
			statusesStats {
				status
				count
			}

			description

			userRate {
				id
				status
				score
				text
				chapters
				episodes
			}
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
