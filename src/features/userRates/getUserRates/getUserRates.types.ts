export interface IUserRate {
	id: string;
	anime: {
		id: string;
		name: string;
		russian: string;
		episodes: number;
		episodesAired: number;
		score: number;
		kind: string;
		releasedOn: {
			year: number;
		};
		airedOn: {
			year: number;
		};
		poster: {
			main2xUrl: string;
		} | null;
	};
	episodes: number;
	status: string;
	createdAt: string;
	score: number;
}

export interface IUserRatesResponse {
	userRates: IUserRate[];
}
