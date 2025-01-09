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
	players: IAnilibKodikPlayer[] | IAnilibAnimeLibPlayer[];
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
