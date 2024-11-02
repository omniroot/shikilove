export interface ICurrentUser {
	id: string;
	avatarUrl: string;
	nickname: string;
	lastOnlineAt: string;
}

interface IFullStats {
	anime: { id: number; grouped_id: string; name: string; size: number; type: string }[];
	manga: { id: number; grouped_id: string; name: string; size: number; type: string }[];
}

interface IStats {
	anime: { name: string; value: number }[];
	manga: { name: string; value: number }[];
}

export interface IUser {
	nickname: string;
	avatar: string;
	image: any;
	last_online_at: string;
	url: string;
	name: any;
	sex: string;
	full_years: number;
	last_online: string;
	website: string;
	location: any;
	banned: boolean;
	about: string;
	about_html: string;
	common_info: any[];
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

export type IFullCurrentUser = IUser;

export interface IAuthResponse {
	currentUser: ICurrentUser;
}
