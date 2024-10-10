import { fetchUserThunk } from "@/store/userThunks"
import { IUser } from "@/types/user.interface"
import { SerializedError, createSlice } from "@reduxjs/toolkit"

interface IinitialState {
	isLogin: boolean
	user?: IUser
	isLoading?: boolean
	error?: SerializedError | null
}

const initialState: IinitialState = {
	isLogin: false,
	isLoading: true,
	error: null,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserThunk.fulfilled, (state, action) => {
				if (action.payload && action.payload.user) {
					state.isLoading = false
					state.isLogin = action.payload.isLogin
					state.user = action.payload.user
				}
			})
			.addCase(fetchUserThunk.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchUserThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as SerializedError
			})
	},
})

export const counterSliceActions = userSlice.actions
export default userSlice.reducer
