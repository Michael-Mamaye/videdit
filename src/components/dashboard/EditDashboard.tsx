import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import { deleteDashboardData } from "../../features/dashboard/dashboardSlice";
import { DashboardStateType } from "../../features/types/StateTypes";
import { getFormattedDate, getTimeFromDate } from "../../utils/utils";
import { CalendarIcon } from "../shared-components/icons/CalendarIcon";
import { Clock } from "../shared-components/icons/Clock";
import { CommentIcon } from "../shared-components/icons/CommentIcon";
import { HeartIcon } from "../shared-components/icons/HeartIcon";
import { PlayIcon } from "../shared-components/icons/PlayIcon";
import { Title } from "../shared-components/Title";
import EditDashboardForm from "./EditDashboardForm";

const flexRowBoxStyle = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
};
const EditDashboard = () => {
	const { id: currentId } = useParams();
	const dashboardData: DashboardStateType[] = useSelector(
		(state: RootState) => state.dashboard.dashboardData
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const singleDashData = dashboardData.filter(
		(item) => item.id === currentId
	)[0];
	return (
		<Box
			sx={{
				mb: 5,
			}}>
			<Title title={`Video Edit`} />

			<Grid container columnSpacing={3} rowSpacing={3}>
				<Grid item xs={12} md={12} lg={3.5}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							padding: 3,
							borderRadius: 3,
							backgroundColor: "#FFFFFF",
							maxWidth: 700,
						}}>
						<Box>
							{/* user name with avatar box */}
							<Box sx={{ ...flexRowBoxStyle, columnGap: 3 }}>
								<Avatar
									src={require("../../assets/profile.png")}
									alt="alt Text"
									sx={{ width: 60, height: 60 }}
								/>
								<Box>
									<Typography>By Chris Evans</Typography>
									<Typography
										variant="body2"
										color="text.secondary">{`@${singleDashData?.username}`}</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									...flexRowBoxStyle,
									py: 3,
									justifyContent: "space-between",
									maxWidth: 500,
								}}>
								<Box sx={{ ...flexRowBoxStyle, columnGap: 2 }}>
									<CalendarIcon fontSize="small" />
									<Typography>
										{getFormattedDate(singleDashData?.timestamp)}
									</Typography>
								</Box>
								<Box sx={{ ...flexRowBoxStyle, columnGap: 2 }}>
									<Clock fontSize="small" />
									<Typography>
										{getTimeFromDate(singleDashData?.timestamp)}
									</Typography>
								</Box>
							</Box>
							<Box sx={{ height: 400 }}>
								<div style={{ position: "relative" }}>
									<video
										style={{
											position: "absolute",
											minHeight: 400,
											width: "100%",
											maxWidth: 600,
											border: "1px solid #dbdbdb",
											borderRadius: 10,
										}}
										controls
										poster={`${singleDashData?.thumbnail}`}>
										<source
											src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
											type="video/mp4"
										/>
									</video>
								</div>
							</Box>
							<Box
								sx={{
									...flexRowBoxStyle,
									py: 3,
									justifyContent: "space-between",
									maxWidth: 500,
								}}>
								<Box sx={{ ...flexRowBoxStyle, columnGap: 2 }}>
									<HeartIcon fontSize="small" />
									<Typography>{singleDashData?.reactions.likes}</Typography>
								</Box>
								<Box sx={{ ...flexRowBoxStyle, columnGap: 2 }}>
									<CommentIcon fontSize="small" />
									<Typography>{singleDashData?.reactions.comment}</Typography>
								</Box>
								<Box sx={{ ...flexRowBoxStyle, columnGap: 2 }}>
									<PlayIcon fontSize="small" />
									<Typography>{singleDashData?.reactions.views}</Typography>
								</Box>
							</Box>
						</Box>

						<Button
							color="secondary"
							variant="outlined"
							onClick={async () => {
								if (currentId) await dispatch(deleteDashboardData(currentId));
								navigate("/dashboard");
							}}
							sx={{
								marginTop: 20,
								marginBottom: 0,
								width: "100%",
								borderRadius: 3,
							}}>
							Delete Video
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} md={12} lg={8.5}>
					<Box
						sx={{
							height: { xs: "115%", sm: "115%", md: "115%", lg: "100%" },
							px: 3,
							paddingTop: 2,
							paddingBottom: 4,
							borderRadius: 3,
							backgroundColor: "#FFFFFF",
						}}>
						<EditDashboardForm data={singleDashData} />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default EditDashboard;
