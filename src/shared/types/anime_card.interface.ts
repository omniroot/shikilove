export interface IAnimeCard {
	id: string;
	poster: string;
	name: string;
	russian: string;
	episodes: number;
	score: number;
	kind: string;
	airedOn: string;
	userRate?: {
		status?: string;
		episodes?: number;
		score?: number;
	};
}
