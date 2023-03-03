import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
		},
		secondary: {
			main: "#2196f3",
		},
		error: {
			main: red.A400,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: "#fafafa",
				},
				"*::-webkit-scrollbar": {
					width: "5px",
					height: "0",
					"box-shadow": "10 20 2px 2px rgba(0, 0, 0, 0.6)",
				},
				"*::-webkit-scrollbar-track": {
					background: "#2196f3",
					"border-radius": "10px",
				},
				"*::-webkit-scrollbar-thumb": {
					" box-shadow": "inset 0 0 5px grey",
					"border-radius": "3px",
				},
			},
		},
	},
});

export default theme;
