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
		updateDashboardData: (
			state,
			action: PayloadAction<{ data: DashboardStateType; id: string }>
		) => {
			state.dashboardData = state.dashboardData.map((item) => {
				if (item.id === action.payload.id) {
					item.title = action.payload.data.title;
					item.subject = action.payload.data.subject;
					item.category = action.payload.data.category;
					item.tags = action.payload.data.tags;
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

export const { updateDashboardData, addDashboardData, deleteDashboardData } =
	dashboardSlice.actions;

export default dashboardSlice.reducer;
