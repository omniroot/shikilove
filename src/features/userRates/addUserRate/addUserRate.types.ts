import { IUserRateStatus } from "@pages/user/_api/userRate/userRate.types.ts";

export interface IUserRateAdd {
	userId: number;
	animeId: string;
	status?: IUserRateStatus;
	episodes?: string;
}
