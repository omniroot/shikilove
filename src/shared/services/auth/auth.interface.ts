export interface ICurrentUser {
	id: string;
	avatarUrl: string;
	nickname: string;
	lastOnlineAt: string;
}

export interface IAuthResponse {
	currentUser: ICurrentUser;
}
