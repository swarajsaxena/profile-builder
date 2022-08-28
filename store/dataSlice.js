import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { HYDRATE } from 'next-redux-wrapper'

// Initial state
const initialState = {
	introduction: {
		name: null,
		subtitle: null,
		description: null,
		email: null,
		based: null,
		portfolioLink: null,
		portfolioText: null,
		currentlylearing: null,
		anythisElse: null,
	},
}

// Actual Slice
export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		// Action to set the data
		setAuthState(state, action) {
			state.authState = action.payload
		},
	},
})

export const { setAuthState } = dataSlice.actions

export const selectData = (state) => state.dataState

export default dataSlice.reducer
