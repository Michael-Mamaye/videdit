import { SearchOutlined } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Select, TextField } from "@mui/material";
import { DataGrid, GridColDef, GridToolbarContainer } from "@mui/x-data-grid";
import { useState } from "react";

type props = {
	columns: GridColDef[];
	rows: any[];
	onSearchChange: (e: string) => void;
};
const EnhancedDataGrid = ({ columns, rows, onSearchChange }: props) => {
	const [searchText, setSearchText] = useState("");
	function CustomGridToolbar() {
		return (
			<GridToolbarContainer sx={{ py: 1.5, borderBottom: "1px solid #dbdbdb" }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}>
					<TextField
						fullWidth
						onChange={(e) => setSearchText(e.target.value)}
						id="navbar-searchfield"
						size="small"
						name="searchVideoField"
						variant="filled"
						hiddenLabel
						placeholder="Search videos via hashtags"
						defaultValue={searchText}
						InputProps={{
							endAdornment: (
								<IconButton onClick={() => onSearchChange(searchText)}>
									<SearchOutlined />
								</IconButton>
							),
							disableUnderline: true,
							sx: {
								width: { sm: 250, xs: 250, md: 450, lg: 450 },
								borderRadius: 2,
							},
						}}
					/>
					<Select
						size="small"
						variant="filled"
						value="Last-7-Days"
						defaultChecked
						disableUnderline
						sx={{ borderRadius: 1, width: 150, textAlign: "center" }}>
						<MenuItem value="Last-7-Days" selected>
							Last 7 Days
						</MenuItem>
						<MenuItem value="Last-Month">Last Month</MenuItem>
						<MenuItem value="Last-6-Month">Last 6 Month</MenuItem>
						<MenuItem value="Last-Year">Last Year</MenuItem>
					</Select>
				</Box>
			</GridToolbarContainer>
		);
	}
	return (
		<DataGrid
			columns={columns}
			rows={rows || []}
			components={{
				Toolbar: CustomGridToolbar,
			}}
			sx={{
				height: 800,
				px: 2,
				background: "white",
				borderRadius: 3,
				border: "none",
				"& .MuiDataGrid-iconSeparator": {
					display: "none",
				},
				"& .MuiDataGrid-columnHeaderTitle": {
					fontWeight: 600,
					fontSize: "14px",
					minHeight: "34px",
				},
				"& .MuiDataGrid-columnHeaders": {
					borderBottom: "none",
				},
				"& .MuiDataGrid-cell": {
					color: "#757575",
					borderBottom: "none",
				},
				"& .MuiPaginationItem-root": {
					borderRadius: 0,
				},
				// Datagrid Row Styling
				"& .paxton-table--row": {
					border: "none",
					marginBottom: 2,
				},
				// remove borders and separators
				"& .paxton-table--cell": {
					border: "none",
				},
			}}
			getRowClassName={() => "paxton-table--row"}
		/>
	);
};
export default EnhancedDataGrid;
