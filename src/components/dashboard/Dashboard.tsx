import { Box, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { DashboardStateType } from "../../features/types/StateTypes";
import EnhancedDataGrid from "../shared-components/EnhancedDatagrid";
import MiniCard from "./MiniCard";
import { Title } from "../shared-components/Title";
import { useNavigate } from "react-router-dom";
import { columnD } from "./columnD";
const ManIcon = require("../../assets/manpic.png");
const ReportIcon = require("../../assets/report.png");
const PostsIcon = require("../../assets/posts.png");

const Dashboard = () => {
	const dashboardData: DashboardStateType[] = useSelector(
		(state: RootState) => state.dashboard.dashboardData
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const miniCardDatas = [
		{
			name: "Total Users",
			amounts: "60 million",
			iconSrc: ManIcon,
		},
		{
			name: "Total Reports",
			amounts: "10,000",
			iconSrc: ReportIcon,
		},
		{
			name: "Total Posts",
			amounts: "1.5 Billion",
			iconSrc: PostsIcon,
		},
	];
	return (
		<Box>
			<Box>
				<Title title="Dashboard" />
				<Grid container spacing={3}>
					{miniCardDatas.map((item) => (
						<Grid item xs={12} md={4} key={item.name}>
							<MiniCard
								cardName={item.name}
								amounts={item.amounts}
								icon={
									<img
										alt="icons"
										src={item.iconSrc}
										style={{ width: 80, height: 80 }}
									/>
								}
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			<Box sx={{ marginTop: 10 }}>
				<Title title="Videos" />
				<EnhancedDataGrid
					columns={columnD({ navigate: navigate, dispatch: dispatch })}
					rows={dashboardData}
				/>
			</Box>
		</Box>
	);
};

export default Dashboard;
