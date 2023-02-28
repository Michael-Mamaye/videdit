import { Avatar, Box, Grid, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { DashboardStateType } from "../../features/types/StateTypes";
import EnhancedDataGrid from "../shared-components/EnhancedDatagrid";
import MiniCard from "./MiniCard";
import {
	GridColDef,
	GridValueGetterParams,
	GridRenderCellParams,
} from "@mui/x-data-grid";
import { getFormattedDate } from "../../utils/utils";
import { searchDashboardData } from "../../features/dashboard/dashboardSlice";

type titleProp = {
	title: string;
};
const Title = ({ title }: titleProp): JSX.Element => (
	<Typography fontWeight="bold" variant="h5">
		{title}
	</Typography>
);
const columnD: GridColDef[] = [
	{
		field: "thumbnail",
		headerName: "Thumbnail",
		width: 190,
		renderCell: (params: GridRenderCellParams): React.ReactNode => {
			return (
				<img
					style={{
						height: 100,
						width: 100,
						borderRadius: "2px",
						margin: 1,
					}}
					src={`${params.row.thumbnail}`}
					alt="thumbnail"
				/>
			);
		},
	},
	{
		field: "title",
		headerName: "Video Title",
		width: 190,
	},
	{
		field: "username",
		headerName: "Username",
		width: 190,
	},
	{
		field: "timestamp",
		headerName: "Upload Date",
		width: 190,
		valueGetter: (params: GridValueGetterParams): String => {
			return getFormattedDate(params.row.timestamp);
		},
	},
	{
		field: "views",
		headerName: "Views",
		width: 190,
		valueGetter: (params: GridValueGetterParams): number => {
			return params.row.reactions.views;
		},
	},
	{
		field: "comment",
		headerName: "Comments",
		width: 190,
		valueGetter: (params: GridValueGetterParams): number => {
			return params.row.reactions.comment;
		},
	},
	{
		field: "reactions",
		headerName: "Likes",
		width: 190,
		valueGetter: (params: GridValueGetterParams): number => {
			return params.row.reactions.likes;
		},
	},
	{
		field: "edit",
		headerName: "Edit",
		width: 190,
		renderCell: (params: GridRenderCellParams): React.ReactNode => {
			return (
				<>
					<IconButton>
						<Icon sx={{ height: 30, width: 30, color: "#2196f3" }}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
								/>
							</svg>
						</Icon>
					</IconButton>
				</>
			);
		},
	},
	{
		field: "delete",
		headerName: "Delete",
		width: 190,
		renderCell: (params: GridRenderCellParams): React.ReactNode => {
			return (
				<IconButton>
					<Icon sx={{ height: 30, width: 30 }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</Icon>
				</IconButton>
			);
		},
	},
];

const Dashboard: React.FC = () => {
	const dashboardData: DashboardStateType[] = useSelector(
		(state: RootState) => state.dashboard.dashboardData
	);
	const dispatch = useDispatch();
	const onSearchChange = async (text: string) => {
		await dispatch(searchDashboardData(text));
	};

	return (
		<Box>
			<Box>
				<Title title="Dashboard" />
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<MiniCard
							cardName="Total Users"
							amounts="60 million"
							icon={<Avatar alt="alt Text" sx={{ width: 80, height: 80 }} />}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<MiniCard
							cardName="Total Reports"
							amounts="10,000"
							icon={<Avatar alt="alt Text" sx={{ width: 80, height: 80 }} />}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<MiniCard
							cardName="Total Posts"
							amounts="1.5 Billion"
							icon={<Avatar alt="alt Text" sx={{ width: 80, height: 80 }} />}
						/>
					</Grid>
				</Grid>
			</Box>

			<Box sx={{ marginTop: 10 }}>
				<Title title="Videos" />
				<EnhancedDataGrid
					columns={columnD}
					rows={dashboardData}
					onSearchChange={onSearchChange}
				/>
			</Box>
		</Box>
	);
};

export default Dashboard;
