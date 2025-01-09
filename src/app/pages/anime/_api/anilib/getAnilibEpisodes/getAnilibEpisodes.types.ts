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
