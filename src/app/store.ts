import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";

export const store = configureStore({
	reducer: {
		dashboard: dashboardReducer,
	},
});

// we will use this state when we selecting state using useSelector hook
export type RootState = ReturnType<typeof store.getState>;
