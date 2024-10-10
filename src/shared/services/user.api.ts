import { CONSTS } from "@/consts/consts"
import { refreshTokens } from "@/services/auth.api"
import { IAnimeQuery } from "@/types/api.interface"
import {
	IUpdateUserRate,
	IUser,
	IUserInfo,
	IUserRate,
} from "@/types/user.interface"
import { saveTokens } from "@/utils/saveTokens"
import axios, { AxiosError } from "axios"

const _shikimoriApi = axios.create({
	baseURL: "https://shikimori.one/",
	headers: {
		"User-Agent": "ShikiLove",
		Accept: "application/json",
		"Content-Type": "application/json",
	},
})

let isRetry = false

_shikimoriApi.interceptors.request.use((config) => {
	const access_token = localStorage.getItem("access_token")
	if (access_token) {
		config.headers.Authorization = `Bearer ${access_token}`
	}
	return config
})

_shikimoriApi.interceptors.response.use(
	(config) => {
		return config
	},
	async (error: AxiosError) => {
		const originalRequest = error.config
		if (isRetry) {
			console.log("bad interceptions")

			return null
		}
		if (error.response?.status === 401 && error.response && !isRetry) {
			isRetry = true

			try {
				const response = await refreshTokens()
				if (response && originalRequest) {
					saveTokens(response)
					isRetry = false

					console.log("good interceptions")
					return _shikimoriApi.request(originalRequest)
				}
			} catch {
				isRetry = true

				console.log("Error while refreshing tokens")
				return null
			}
		}
	}
)

export const shikimoriApi = {
	whoami: async (): Promise<IUserInfo | null> => {
		try {
			const response = await _shikimoriApi.get<IUserInfo>("api/users/whoami")
			if (response) return response.data
		} catch (error) {
			throw error
		}
		return null
	},
	getUser: async (userId: number | null = null) => {
		try {
			if (userId === null) {
				userId = Number(localStorage.getItem("userId"))
			}
			const response = await _shikimoriApi.get<IUser>(`api/users/${userId}`)
			if (response) return response.data
		} catch (error) {
			throw error
		}
		return null
	},
	searchAnime: async (name: string) => {
		try {
			const response = await _shikimoriApi.get<IAnimeQuery[]>(
				`api/animes?search=${name}`
			)
			return response.data
		} catch (error: any) {}
		return null
	},
	updateUserRate: async (id: string, data: IUpdateUserRate) => {
		try {
			const response = await _shikimoriApi.patch<IUserRate>(
				`api/v2/user_rates/${id}`,
				data
			)
			return response.data
		} catch (error: any) {}
		return null
	},
}
