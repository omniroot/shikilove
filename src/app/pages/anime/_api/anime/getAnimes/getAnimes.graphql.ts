export const GET_ANIMES = `
query ($ids: String, $limit: PositiveInt, $status: AnimeStatusString) {
		animes(ids: $ids, limit: $limit, status: $status) {
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
		}
	}
`;
