import { Box, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { DashboardStateType } from "../../features/types/StateTypes";
import EnhancedDataGrid from "../shared-components/EnhancedDatagrid";

import {
	GridColDef,
	GridValueGetterParams,
	GridRenderCellParams,
} from "@mui/x-data-grid";
import { getFormattedDate, getThousandsToK } from "../../utils/utils";
import {
	deleteDashboardData,
} from "../../features/dashboard/dashboardSlice";
import { Title } from "../shared-components/Title";
import { DeleteIcon } from "../shared-components/icons/DeleteIcon";
import { EditIcon } from "../shared-components/icons/EditIcon";
import { useNavigate } from "react-router-dom";

const Users: React.FC = () => {
	const dashboardData: DashboardStateType[] = useSelector(
		(state: RootState) => state.dashboard.dashboardData
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const columnD: GridColDef[] = [
		{
			field: "thumbnail",
			headerName: "Thumbnail",
			width: 153,
			renderCell: (params: GridRenderCellParams): React.ReactNode => {
				return (
					<img
						style={{
							height: 55,
							width: 100,
							borderRadius: 10,
						}}
						src={`${params.row.thumbnail}`}
						alt="thumbnail"
						loading="lazy"
					/>
				);
			},
		},
		{
			field: "title",
			headerName: "Video Title",
			width: 153,
		},
		{
			field: "username",
			headerName: "Username",
			width: 153,
			valueGetter: (params: GridValueGetterParams): String => {
				return `@${params.row.username}`;
			},
		},
		{
			field: "timestamp",
			headerName: "Upload Date",
			width: 153,
			valueGetter: (params: GridValueGetterParams): String => {
				return getFormattedDate(params.row.timestamp);
			},
		},
		{
			field: "views",
			headerName: "Views",
			width: 153,
			valueGetter: (params: GridValueGetterParams): string => {
				return getThousandsToK(params.row.reactions.views);
			},
		},
		{
			field: "comment",
			headerName: "Comments",
			width: 153,
			valueGetter: (params: GridValueGetterParams): string => {
				return params.row.reactions.comment;
			},
		},
		{
			field: "reactions",
			headerName: "Likes",
			width: 153,
			valueGetter: (params: GridValueGetterParams): string => {
				return getThousandsToK(params.row.reactions.likes);
			},
		},
		{
			field: "edit",
			headerName: "Edit",
			width: 153,
			renderCell: (params: GridRenderCellParams): React.ReactNode => {
				return (
					<IconButton
						onClick={() => {
							navigate(`/dashboard/editdata/${params.row.id}`);
						}}>
						<EditIcon />
					</IconButton>
				);
			},
		},
		{
			field: "delete",
			headerName: "Delete",
			width: 153,
			renderCell: (params: GridRenderCellParams): React.ReactNode => {
				return (
					<IconButton
						onClick={() => {
							dispatch(deleteDashboardData(params.row.id));
						}}>
						<DeleteIcon />
					</IconButton>
				);
			},
		},
	];

	return (
		<Box>
			<Title title="Users" />
			<EnhancedDataGrid
				columns={columnD}
				rows={dashboardData}
			/>
		</Box>
	);
};

export default Users;
