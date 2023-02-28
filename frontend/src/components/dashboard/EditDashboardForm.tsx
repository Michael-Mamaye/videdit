import {
	Box,
	Button,
	Divider,
	FormControl,
	FormLabel,
	Grid,
	IconButton,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { DashboardStateType } from "../../features/types/StateTypes";
import { useForm } from "react-hook-form";
import { PencilIcon } from "../shared-components/icons/PencilIcon";
import { AddBoxTwoTone } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { updateDashboardData } from "../../features/dashboard/dashboardSlice";
import { useNavigate } from "react-router-dom";

type props = {
	data: DashboardStateType;
};
const EditDashboardForm = ({ data }: props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<DashboardStateType>();
	const onSubmit = handleSubmit((singleData) => {
		dispatch(updateDashboardData({ id: data.id, data: singleData }));
		navigate("/dashboard");
	});
	return (
		<Box>
			<form onSubmit={onSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<FormControl fullWidth sx={{ marginTop: 2, rowGap: 1 }}>
							<FormLabel>Video Title</FormLabel>
							<TextField
								size="small"
								defaultValue={data?.title}
								{...register("title")}
								placeholder="Video Title"
								InputProps={{
									endAdornment: (
										<IconButton>
											<PencilIcon onClick={() => {}} />
										</IconButton>
									),
									disableUnderline: true,
									sx: {
										borderRadius: 2,
									},
								}}
							/>
						</FormControl>
						<FormControl fullWidth sx={{ marginTop: 2, rowGap: 1 }}>
							<FormLabel>Category</FormLabel>
							<Select
								fullWidth
								value={data?.category}
								defaultValue={data?.category}
								size="small"
								// {...register("category")}
								placeholder="Bill">
								<MenuItem value={data?.category}>{data?.category}</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth sx={{ marginTop: 2, rowGap: 1 }}>
							<FormLabel>Add Hashtag</FormLabel>
							<TextField
								size="small"
								defaultValue={data?.title}
								{...register("tags")}
								placeholder="Keyword"
								InputProps={{
									endAdornment: (
										<IconButton sx={{ ml: 2 }}>
											<AddBoxTwoTone />
										</IconButton>
									),
									disableUnderline: true,
									sx: {
										borderRadius: 2,
									},
								}}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth sx={{ marginTop: 2, rowGap: 1 }}>
							<FormLabel>Subject</FormLabel>
							<TextField
								size="small"
								defaultValue={data?.subject}
								{...register("subject")}
								placeholder="Subject"
								InputProps={{
									endAdornment: (
										<IconButton>
											<PencilIcon onClick={() => {}} />
										</IconButton>
									),
									disableUnderline: true,
									sx: {
										borderRadius: 2,
									},
								}}
							/>
						</FormControl>
						<FormControl fullWidth sx={{ marginTop: 2, rowGap: 1 }}>
							<FormLabel>Primers</FormLabel>
							<Select
								fullWidth
								defaultValue={data?.primers}
								size="small"
								{...register("primers")}
								placeholder="primers">
								<MenuItem defaultValue={data?.category}>
									{data?.category}
								</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth sx={{ marginTop: 2, rowGap: 1 }}>
							<FormLabel>Current Hashtag</FormLabel>
							<TextField
								size="small"
								defaultValue={data?.tags}
								{...register("tags")}
								placeholder="Current Hashtag"
								InputProps={{
									endAdornment: (
										<IconButton>
											<PencilIcon onClick={() => {}} />
										</IconButton>
									),
									disableUnderline: true,
									sx: {
										borderRadius: 2,
									},
								}}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Divider
							textAlign="left"
							sx={{
								fontWeight: "bold",
								fontSize: 18,
								marginLeft: 0,
								paddingLeft: 0,
							}}>
							Levels
						</Divider>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth sx={{ rowGap: 1 }}>
							<FormLabel>Level 1</FormLabel>
							<Select
								fullWidth
								value="lorem ipsum"
								size="small"
								placeholder="lorem ipsum">
								<MenuItem value="lorem ipsum">lorem ipsum</MenuItem>
							</Select>
						</FormControl>
						<FormControl
							fullWidth
							sx={{ marginTop: 2, marginBottom: { sm: 2 }, rowGap: 1 }}>
							<FormLabel>Level 2</FormLabel>
							<Select
								fullWidth
								value="lorem ipsum"
								size="small"
								placeholder="lorem ipsum">
								<MenuItem value="lorem ipsum">lorem ipsum</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth sx={{ rowGap: 1 }}>
							<FormLabel>Level 3</FormLabel>
							<Select
								fullWidth
								value="lorem ipsum"
								size="small"
								placeholder="lorem ipsum">
								<MenuItem value="lorem ipsum">lorem ipsum</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth sx={{ marginTop: 2, rowGap: 1 }}>
							<FormLabel>Level 4</FormLabel>
							<Select
								fullWidth
								value="lorem ipsum"
								size="small"
								placeholder="lorem ipsum">
								<MenuItem value="lorem ipsum">lorem ipsum</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<Button
							color="secondary"
							variant="outlined"
							onClick={() => {
								navigate("/dashboard");
							}}
							sx={{
								position: "relative",
								marginTop: 18.5,
								bottom: 1,
								width: "100%",
								borderRadius: 3,
							}}>
							{" "}
							Cancel Edit
						</Button>
					</Grid>
					<Grid item xs={6}>
						<Button
							color="secondary"
							variant="contained"
							type="submit"
							sx={{
								position: "relative",
								marginTop: 18.5,
								bottom: 1,
								width: "100%",
								borderRadius: 3,
							}}>
							{" "}
							Save Changes
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default EditDashboardForm;
