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

export interface IAnilibEpisode {
	id: number;
	model: string;
	name: string;
	number: string;
	number_secondary: string;
	season: string;
	status: {
		id: string;
		label: string;
		abbr: unknown | null;
	};
	anime_id: number;
	created_at: string;
	item_number: number;
	type: string;
}

export interface IAnilibVideo {
	id: number;
	model: string;
	name: string;
	number: string;
	number_secondary: string;
	season: string;
	status: {
		id: string;
		label: string;
		abbr: unknown | null;
	};
	anime_id: number;
	created_at: string;
	players: IAnilibAnimeLibPlayer[];
	type: string;
}

export interface IAnilibKodikPlayer {
	id: number;
	episode_id: number;
	player: "Kodik";
	translation_type: {
		id: number;
		label: string;
	};
	team: {
		id: number;
		slug: string;
		slug_url: string;
		model: string;
		name: string;
		cover: {
			filename: string;
			thumbnail: string;
			default: string;
			md: string;
		};
		stats: {
			value: number;
			formated: string;
			short: string;
			label: string;
			tag: string;
		}[];
	};
	created_at: string;
	views: number;
	src: string;
	timecode: [];
}

export interface IAnilibAnimeLibPlayer {
	id: number;
	episode_id: number;
	player: "Animelib";
	translation_type: {
		id: number;
		label: string;
	};
	team: {
		id: number;
		slug: string;
		slug_url: string;
		model: string;
		name: string;
		cover: {
			filename: string;
			thumbnail: string;
			default: string;
			md: string;
		};
		stats: {
			value: number;
			formated: string;
			short: string;
			label: string;
			tag: string;
		}[];
	};
	created_at: string;
	views: number;
	timecode: unknown[];
	subtitles: unknown[];
	video: {
		id: number;
		quality: {
			href: string;
			quality: number;
			bitrate: number;
		}[];
	};
}
