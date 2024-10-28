import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";

export interface IUserRate {
	id: string;
	anime: {
		id: string;
		name: string;
		poster: {
			main2xUrl: string;
		};
	};
	episodes: number;
	status: string;
	createdAt: string;
}

export interface IUserRatesQuery {
	userRates: IUserRate[];
}

export type IUserRates = IUserRate[];

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
