interface IFullStats {
	anime: { id: number; grouped_id: string; name: string; size: number; type: string }[];
	manga: { id: number; grouped_id: string; name: string; size: number; type: string }[];
}

interface IStats {
	anime: { name: string; value: number }[];
	manga: { name: string; value: number }[];
}

export interface IUser {
	id: number;
	nickname: string;
	avatar: string;
	image: {
		x160: string;
		x148: string;
		x80: string;
		x64: string;
		x48: string;
		x32: string;
		x16: string;
	};
	last_online_at: string;
	url: string;
	name: string | unknown;
	sex: string;
	full_years: number;
	last_online: string;
	website: string;
	location: string | unknown;
	banned: boolean;
	about: string;
	about_html: string;
	common_info: {
		[key: number]: string;
	}[];
	show_comments: boolean;
	in_friends: boolean;
	is_ignored: boolean;
	stats: {
		statuses: IFullStats;
		full_statuses: IFullStats;
		scores: IStats;
		types: IStats;
		ratings: IStats;
		has_anime?: boolean;
		has_manga?: boolean;
		genres: unknown;
		studios: unknown;
		publishers: unknown;
		activity: {
			name: number[];
			value: number;
		}[];
	};
	style_id: number;
}
