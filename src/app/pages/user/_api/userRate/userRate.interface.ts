export type IUserRateStatus =
	| "watching"
	| "planned"
	| "completed"
	| "rewatching"
	| "on_hold"
	| "dropped";

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

export type IUserRates = IUserRate[];

export interface IUserRatesResponse {
	userRates: IUserRates;
}

export interface IUserRateAdd {
	userId: number;
	animeId: string;
	status?: IUserRateStatus;
	episodes?: string;
}

export interface IUserRateUpdate {
	userRateId: number;
	episodes?: number;
	status?: IUserRateStatus;
}

export interface IUserRateDelete {
	userRateId: number;
}
