import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import MainLayout from "./components/layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import EditDashboard from "./components/dashboard/EditDashboard";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MainLayout>
				<Routes>
					<Route path="/" element={<Navigate to="/users/home" replace />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/dashboard/editdata/:id" element={<EditDashboard />} />
					<Route path="/users" element={<Dashboard />} />
					<Route path="/notifications" element={<Dashboard />} />
					<Route path="/reports" element={<Dashboard />} />
					<Route path="/reports" element={<div>Page not found</div>} />
				</Routes>
			</MainLayout>
		</ThemeProvider>
	);
}

export default App;
