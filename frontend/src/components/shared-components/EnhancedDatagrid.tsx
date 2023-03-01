import { ChevronLeft, ChevronRight, SearchOutlined } from "@mui/icons-material";
import {
	Box,
	IconButton,
	MenuItem,
	Pagination,
	PaginationItem,
	TextField,
} from "@mui/material";
import { DataGrid, GridColDef, GridToolbarContainer } from "@mui/x-data-grid";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { ChevronDown } from "./icons/ChevronDown";

type props = {
	columns: GridColDef[];
	rows: any[];
	onSearchChange: (e: string) => void;
};

const paginationBtnStyle = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
};
const EnhancedDataGrid = ({ columns, rows, onSearchChange }: props) => {
	const { getValues, register } = useForm();
	const [paginationState, setPaginationState] = useState({
		pageSize: 9,
		page: 1,
		count: Math.ceil(rows.length / 9),
	});
	function CustomGridToolbar() {
		return (
			<GridToolbarContainer
				sx={{
					py: 1.5,
					borderBottom: "1px solid #dbdbdb",
					position: "relative",
				}}>
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
						{...register("searchText")}
						id="navbar-searchfield"
						size="small"
						name="searchText"
						variant="filled"
						hiddenLabel
						placeholder="Search videos via hashtags"
						defaultValue={getValues("searchText")}
						InputProps={{
							endAdornment: (
								<IconButton>
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
					<TextField
						variant="filled"
						hiddenLabel
						select
						size="small"
						defaultValue="Last 7 Days"
						value={getValues("filterDate")}
						SelectProps={{
							IconComponent: ChevronDown,
						}}
						InputProps={{
							disableUnderline: true,
							sx: {
								width: { xs: 140, md: 140 },
								borderRadius: 2,
								mr: 2,
							},
						}}>
						<MenuItem value="Last 7 Days">Last 7 Days</MenuItem>
						<MenuItem value="Last Month">Last Month</MenuItem>
						<MenuItem value="Last Year">Last Year</MenuItem>
					</TextField>
				</Box>
			</GridToolbarContainer>
		);
	}
	function CustomPagination(paginProps: any) {
		return (
			<Pagination
				{...paginProps}
				shape="rounded"
				sx={{ color: "#dbdbdb" }}
				page={paginationState.page}
				count={paginationState.count}
				onChange={(e, newpage) => {
					console.log("pagination", newpage);
					setPaginationState({ ...paginationState, page: newpage });
				}}
				renderItem={(item) => (
					<PaginationItem
						components={{
							next: () => (
								<Box sx={paginationBtnStyle}>
									Next
									<ChevronRight />
								</Box>
							),
							previous: () => (
								<Box sx={paginationBtnStyle}>
									<ChevronLeft />
									Prev
								</Box>
							),
						}}
						{...item}
					/>
				)}
			/>
		);
	}

	return (
		<DataGrid
			columns={columns}
			rows={rows || []}
			components={{
				Toolbar: CustomGridToolbar,
				Pagination: CustomPagination,
			}}
			componentsProps={{}}
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
			page={paginationState.page - 1}
			pageSize={paginationState.pageSize}
		/>
	);
};
export default EnhancedDataGrid;
