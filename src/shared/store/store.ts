import { create } from "zustand";

interface IUser {}

interface IGlobalStore {
	isLoading: boolean;
	user: IUser | null;
}

const useGlobalStore = create((set) => ({}));

// import { configureStore } from "@reduxjs/toolkit"
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
// import userReducer from "./userSlice"

// import { IUser } from "@/types/user.interface"
// import { create } from "zustand"
// import useSWR from "swr"
// import { shikimoriApi } from "@/services/user.api"

// export const store = configureStore({
// 	devTools: true,
// 	reducer: {
// 		user: userReducer,
// 	},
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// interface IUseUser {
// 	user: IUser | null
// 	setUser: (user: IUser) => void
// 	fetch: () => void
// }
// export const useUser = create<IUseUser>((set) => ({
// 	user: null,
// 	setUser: (user) => {
// 		set({ user: user })
// 	},
// 	fetch: async () => {
// 		const { data: userData } = useSWR("key", () => {
// 			return shikimoriApi.getUser()
// 		})
// 		set({ user: userData })
// 	},
// }))
