import { shikimoriApi } from "@/services/user.api"
import { SerializedError, createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosError } from "axios"

export const fetchUserThunk = createAsyncThunk(
	"user/fetchUser",
	async (_, thunkApi) => {
		try {
			const response = await shikimoriApi.getUser()
			// const response = {
			// 	id: 2345,
			// 	nickname: "unbelievable",
			// 	avatar: "https://desu.shikimori.o…/x48/2345.png?1351181595",
			// 	image: {},
			// 	last_online_at: "2013-02-11T03:28:38.000+04:00",
			// 	url: "https://shikimori.one/unbelievable",
			// 	name: "null",
			// 	sex: "female",
			// 	website: "",
			// 	birth_on: null,
			// 	full_years: 28,
			// 	locale: "ru",
			// } as IUserInfo
			console.log("@ userThunk", response)

			if (response && response.nickname.length > 0) {
				return {
					isLogin: true,
					user: response,
				}
			} else {
				return thunkApi.rejectWithValue({
					code: "401",
					message: "Null from fetchUserThunk",
				} as SerializedError)
			}
		} catch (error: any) {
			console.log("Error from fetchUserThunk", error)

			// return thunkApi.rejectWithValue({
			// 	code: "401",
			// 	message: "Null from fetchUserThunk",
			// } as SerializedError)
		}
	}
)
