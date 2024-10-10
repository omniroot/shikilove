export interface IUserInfo {
	id: number;
	nickname: string;
	avatar: string;
	image: any;
	last_online_at: string;
	url: string;
	name: string | null;
	sex: string;
	website: string;
	birth_on: boolean | null;
	full_years: number;
	locale: string;
}

export interface IUser {
	id: number;
	nickname: string;
	avatar: string;
	image: {
		x160: string;
		x148: string;
		x16: string;
		x32: string;
		x48: string;
		x64: string;
		x80: string;
	};
	last_online_at: string;
	url: string;
	name: string | null;
	sex: string;
	full_years: number;
	last_online: string;
	website: string;
	location: any[];
	banned: boolean;
	about: string;
	about_html: string;
	common_info: any[];
	show_comments: boolean;
	in_friends: boolean;
	is_ignored: boolean;
	stats: any;
	style_id: number;
}

export interface IUserRate {
	id: number;
	user_id: number;
	target_id: number;
	target_type: string;
	score: number;
	status: string;
	rewatches: number;
	episodes: number;
	volumes: number;
	chapters: number;
	text: string | null;
	text_html: string;
	created_at: string;
	updated_at: string;
}

export interface IUpdateUserRate {
	chapters?: string;
	episodes?: string;
	rewatches?: string;
	score?: string;
	status?: string;
	text?: string;
	volumes?: string;
}

export interface IUserRateQuery {
	anime: {
		id: string;
		name: string;
		russian: string;
		english: string;
		poster: {
			mini2xUrl: string;
			originalUrl: string;
		};
		episodes: number;
	};
	id: string;
	chapters: number;
	episodes: number;
	status: string;
}
