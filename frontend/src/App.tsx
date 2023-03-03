import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import MainLayout from "./components/layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import EditDashboard from "./components/dashboard/EditDashboard";
import Users from "./components/users/Users";
import Notifications from "./components/notifications/Notifications";
import Reports from "./components/reports/Reports";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MainLayout>
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/dashboard/editdata/:id" element={<EditDashboard />} />
					<Route path="/users" element={<Users />} />
					<Route path="/notifications" element={<Notifications />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="*" element={<Navigate to="/dashboard" replace />} />
				</Routes>
			</MainLayout>
		</ThemeProvider>
	);
}

export default App;
