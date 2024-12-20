import { IType } from "@/shared/types/_type.interface.ts";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";

export interface IUserRate {
	_type: IType;

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
	animeId: string;
	status?: IUserRateAnimeStatus;
	episodes?: string;
}

export interface IUserRateUpdate {
	userRateId: number;
	episodes?: number;
	status?: IUserRateAnimeStatus;
}

export interface IUserRateDelete {
	userRateId: number;
}
