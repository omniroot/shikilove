export interface ICritique {
	id: number;
	topic_title: string;
	body: string;
	html_body: string;
	html_footer: string;
	created_at: string;
	comments_count: number;
	forum: { id: number; position: number; name: string; permalink: string; url: string };
	user: {
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
	};
	type: string;
	linked_id: number;
	linked_type: string;
	linked: {
		id: number;
		target: {
			id: number;
			name: string;
			russian: string;
			image: {
				original: string;
				preview: string;
				x96: string;
				x48: string;
			};
			url: string;
			kind: string;
			score: string;
			status: string;
			episodes: number;
			episodes_aired: number;
			aired_on: string;
			released_on: unknown | null;
		};
		user: {
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
		};
		votes_count: number;
		votes_for: number;
		body: string;
		html_body: string;
		overall: unknown | null;
		storyline: unknown | null;
		music: unknown | null;
		characters: unknown | null;
		animation: unknown | null;
		created_at: string;
	};
	viewed: boolean;
	last_comment_viewed: boolean;
	event: unknown | null;
	episode: unknown | null;
}
