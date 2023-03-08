import {
	GridColDef,
	GridValueGetterParams,
	GridRenderCellParams,
} from "@mui/x-data-grid";
import { getFormattedDate, getThousandsToK } from "../../utils/utils";
import { deleteDashboardData } from "../../features/dashboard/dashboardSlice";
import { DeleteIcon } from "../shared-components/icons/DeleteIcon";
import { EditIcon } from "../shared-components/icons/EditIcon";
import { IconButton } from "@mui/material";
import { NavigateFunction } from "react-router-dom";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

type props = {
	navigate: NavigateFunction;
	dispatch: Dispatch<AnyAction>;
};
export const columnD = ({ navigate, dispatch }: props) => {
	const columnDD: GridColDef[] = [
		{
			field: "thumbnail",
			headerName: "Thumbnail",
			flex: 1,
			minWidth: 100,
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
			flex: 1,
			minWidth: 100,
		},
		{
			field: "username",
			headerName: "Username",
			flex: 1,
			minWidth: 100,
			valueGetter: (params: GridValueGetterParams): String => {
				return `@${params.row.username}`;
			},
		},
		{
			field: "timestamp",
			headerName: "Upload Date",
			flex: 1,
			minWidth: 100,
			valueGetter: (params: GridValueGetterParams): String => {
				return getFormattedDate(params.row.timestamp);
			},
		},
		{
			field: "views",
			headerName: "Views",
			flex: 1,
			minWidth: 100,
			valueGetter: (params: GridValueGetterParams): string => {
				return getThousandsToK(params.row.reactions.views);
			},
		},
		{
			field: "comment",
			headerName: "Comments",
			flex: 1,
			minWidth: 100,
			valueGetter: (params: GridValueGetterParams): string => {
				return params.row.reactions.comment;
			},
		},
		{
			field: "reactions",
			headerName: "Likes",
			flex: 1,
			minWidth: 100,
			valueGetter: (params: GridValueGetterParams): string => {
				return getThousandsToK(params.row.reactions.likes);
			},
		},
		{
			field: "edit",
			headerName: "Edit",
			flex: 1,
			minWidth: 100,
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
			flex: 1,
			minWidth: 110,
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
	return columnDD;
};
