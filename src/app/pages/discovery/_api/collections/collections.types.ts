export interface ICollection {
	id: number;
	topic_title: string;
	body: string;
	html_body: string;
	html_footer: string;
	created_at: string;
	comments_count: number;
	forum: {
		id: number;
		position: number;
		name: string;
		permalink: string;
		url: string;
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
	linked_id: number;
	linked_type: string;
	linked: unknown | null;
	viewed: boolean;
	last_comment_viewed: boolean;
	event: unknown | null;
	episode: unknown | null;
}
