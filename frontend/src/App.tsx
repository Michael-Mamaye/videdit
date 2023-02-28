import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import MainLayout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import EditDashboard from "./components/dashboard/EditDashboard";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MainLayout>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/dashboard/editdata/:id" element={<EditDashboard />} />
				</Routes>
			</MainLayout>
		</ThemeProvider>
	);
}

export default App;
