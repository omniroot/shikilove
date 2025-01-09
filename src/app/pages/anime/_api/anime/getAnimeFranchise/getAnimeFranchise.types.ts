export interface IAnimeFranchise {
	id: number;
	date: number;
	name: string;
	image_url: string;
	url: string;
	year: number;
	kind: string;
	weight: number;
}

export interface IAnimeFranchisesResponse {
	links: unknown[];
	nodes: IAnimeFranchise[];
}
