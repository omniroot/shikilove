import { IType } from "@/shared/types/_type.interface.ts";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";

export interface IUserRate {
	_type: IType;

	id: string;
	anime: {
		id: string;
		name: string;
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
		};
	};
	episodes: number;
	status: string;
	createdAt: string;
}

export type IUserRates = IUserRate[];

export interface IUserRatesResponse {
	userRates: IUserRates;
}

export interface IUserRateAdd {
	animeId: string;
	status: IUserRateAnimeStatus;
}

export interface IUserRateUpdate {
	userRateId: number;
	episodes?: number;
	status?: IUserRateAnimeStatus;
}

export interface IUserRateDelete {
	userRateId: number;
}
