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
			action: PayloadAction<DashboardStateType>
		) => {},
		addDashboardData: (state, action: PayloadAction<DashboardStateType>) => {},
		deleteDashboardData: (state, action: PayloadAction<string>) => {},
	},
});

export const {
	searchDashboardData,
	updateDashboardData,
	addDashboardData,
	deleteDashboardData,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
