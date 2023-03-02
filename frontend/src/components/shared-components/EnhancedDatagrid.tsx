import { ChevronLeft, ChevronRight, SearchOutlined } from "@mui/icons-material";
import {
	Box,
	IconButton,
	MenuItem,
	Pagination,
	PaginationItem,
	TextField,
	Tooltip,
} from "@mui/material";
import { DataGrid, GridColDef, GridToolbarContainer } from "@mui/x-data-grid";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { ChevronDown } from "./icons/ChevronDown";

type props = {
	columns: GridColDef[];
	rows: any[];
};

const paginationBtnStyle = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
};

/**
 *
 * @param EnhancedDataGrid takes configured columns and rows.
 * 					- rows should be array
 * 					- has custom pagination and GridToolbar with search and filter fields
 * @returns  a datagrid table with pagination and GridToolbar
 */
const EnhancedDataGrid = ({ columns, rows }: props) => {
	const { register, getValues } = useForm();
	const [filteredData, setFilteredData] = useState(rows);
	const [paginationState, setPaginationState] = useState({
		pageSize: 9,
		page: 1,
		count: Math.ceil(rows.length / 9),
	});
	const onSearchChange = (text: string) => {
		if (text) {
			setFilteredData(
				rows.filter((item) => {
					if (item.tags.indexOf(text) > -1) return true;
					else return false;
				})
			);
		} else setFilteredData(rows);
	};

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
					<Tooltip
						title="Write the keyword then click search icon"
						placement="bottom-start">
						<TextField
							fullWidth
							{...register("searchText")}
							id="navbar-searchfield"
							size="small"
							name="searchText"
							variant="filled"
							hiddenLabel
							placeholder="Search videos via hashtags"
							InputProps={{
								endAdornment: (
									<IconButton
										onClick={() => {
											onSearchChange(getValues("searchText"));
										}}>
										<SearchOutlined />
									</IconButton>
								),
								disableUnderline: true,
								sx: {
									width: { xs: 180, sm: 250, md: 450, lg: 450 },
									borderRadius: 2,
								},
							}}
						/>
					</Tooltip>
					<TextField
						variant="filled"
						hiddenLabel
						select
						size="small"
						defaultValue="Last 7 Days"
						SelectProps={{
							IconComponent: ChevronDown,
						}}
						InputProps={{
							disableUnderline: true,
							sx: {
								width: { xs: 110, sm: 140, md: 140 },
								borderRadius: 2,
								mr: { xs: 4, sm: 4, md: 2 },
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
			rows={filteredData || []}
			components={{
				Toolbar: CustomGridToolbar,
				Pagination: CustomPagination,
			}}
			disableSelectionOnClick
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
