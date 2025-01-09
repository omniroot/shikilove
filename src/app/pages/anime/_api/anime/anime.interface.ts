import { IType } from "@/shared/types/_type.interface.ts";

export interface IAnime {
	_type: IType;
	id: string;
	name: string;
	russian: string;
	kind: string;
	rating: string;
	score: number;
	status: string;
	episodes: number;
	episodesAired: number;
	duration: number;
	airedOn: {
		year: number;
		month: number;
		day: number;
		date: string;
	};
	releasedOn: {
		year: number;
		month: number;
		day: number;
		date: string;
	};
	url: string;
	poster: {
		id: string;
		originalUrl: string;
		mainUrl: string;
	};
	licensors: string[];
	createdAt: string;
	updatedAt: string;
	genres: {
		id: string;
		name: string;
		russian: string;
		kind: string;
	}[];
	studios: {
		id: string;
		name: string;
		imageUrl: string;
	}[];
	related: {
		id: string;
		anime: {
			id: string;
			name: string;
		};
		manga: {
			id: string;
			name: string;
		};
		relationKind: string;
		relationText: string;
	}[];
	videos: {
		id: string;
		url: string;
		name: string;
		kind: string;
		playerUrl: string;
		imageUrl: string;
	}[];
	screenshots: {
		id: string;
		originalUrl: string;
		x166Url: string;
		x332Url: string;
	}[];
	scoresStats: {
		score: number;
		count: number;
	}[];
	statusesStats: {
		status: string;
		count: number;
	}[];
	description: string;
	userRate: {
		id: number;
		status: string;
		score: number;
		text: string | null;
		chapters: number;
		episodes: number;
	};
}

export interface IAnimeResponse {
	animes: IAnime[];
}

export interface IAnimeGet {
	animeId?: string;
}
