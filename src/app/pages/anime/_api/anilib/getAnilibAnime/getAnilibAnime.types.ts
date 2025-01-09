export interface IAnimelibSearch {
	id: number;
	name: string;
	rus_name: string;
	eng_name: string;
	slug: string;
	slug_url: string;
	cover: {
		filename: string;
		thumbnail: string;
		default: string;
		md: string;
	};
	ageRestriction: {
		id: number;
		label: string;
	};
	site: number;
	type: {
		id: number;
		label: string;
	};
	releaseDate: string;
	rating: {
		average: string;
		averageFormated: string;
		votes: number;
		votesFormated: string;
		user: number;
	};
	model: string;
	status: {
		id: number;
		label: string;
	};
	releaseDateString: string;
	shiki_rate: unknown | null;
}

export interface IAnilibGetAnimeResponse {
	data: IAnimelibSearch[];
}
