export type IUserRateStatus =
	| "watching"
	| "planned"
	| "completed"
	| "rewatching"
	| "on_hold"
	| "dropped";

export interface IUserRateDelete {
	userRateId: number;
}
