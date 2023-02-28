import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateData } from "./initialStateData";
import { DashboardStateType } from "../types/StateTypes";

const initialState: { dashboardData: DashboardStateType[] } = {
	dashboardData: initialStateData,
};

export const dashboardSlice = createSlice({
	name: "dashboardData",
	initialState,
	reducers: {
		searchDashboardData: (state, action: PayloadAction<string>) => {
			state.dashboardData = state.dashboardData.filter((item) =>
				item.tags.includes(action.payload)
			);
		},
		updateDashboardData: (
			state,
			action: PayloadAction<{ data: DashboardStateType; id: string }>
		) => {
			state.dashboardData = state.dashboardData.map((item) => {
				if (item.id === action.payload.id) {
					item.title = action.payload.data.title;
					item.subject = action.payload.data.title;
				}
				return item;
			});
		},
		addDashboardData: (state, action: PayloadAction<DashboardStateType>) => {},
		deleteDashboardData: (state, action: PayloadAction<string>) => {
			state.dashboardData = state.dashboardData.filter(
				(item) => item.id !== action.payload
			);
		},
	},
});

export const {
	searchDashboardData,
	updateDashboardData,
	addDashboardData,
	deleteDashboardData,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
