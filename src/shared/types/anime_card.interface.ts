export interface IAnimeCard {
	id: string;
	poster?: string;
	name?: string;
	russian?: string;
	episodes?: number;
	score?: number;
	kind?: string;
	airedOn?: string;
	userRate?: {
		id?: string;
		status?: string;
		episodes?: number;
		score?: number;
	};
}
