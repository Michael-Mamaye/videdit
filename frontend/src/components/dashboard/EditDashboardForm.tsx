import {
	Box,
	Button,
	Divider,
	FormControl,
	FormLabel,
	Grid,
	MenuItem,
	TextField,
} from "@mui/material";
import { DashboardStateType } from "../../features/types/StateTypes";
import { useForm } from "react-hook-form";
import { PencilIcon } from "../shared-components/icons/PencilIcon";
import { AddBoxTwoTone } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { updateDashboardData } from "../../features/dashboard/dashboardSlice";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "../shared-components/icons/ChevronDown";

type props = {
	data: DashboardStateType;
};

const formControlStyle = {
	marginTop: 2,
	rowGap: 1,
	"& .MuiOutlinedInput-root": {
		"&.Mui-focused fieldset": {
			borderColor: "#dbdbdb",
		},
	},
};
const EditDashboardForm = ({ data }: props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<DashboardStateType>();
	const onSubmit = handleSubmit((formData) => {
		console.log(formData);
		// dispatch(updateDashboardData({ id: data.id, data: formData }));
		// navigate("/dashboard");
	});
	const SelectTextField = () => (
		<TextField
			hiddenLabel
			select
			size="small"
			defaultValue="lorem ipsum"
			SelectProps={{
				IconComponent: ChevronDown,
			}}
			InputProps={{
				sx: {
					borderRadius: 2,
				},
			}}>
			<MenuItem value="lorem ipsum">lorem ipsum</MenuItem>
		</TextField>
	);
	return (
		<Box>
			<form onSubmit={onSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel>Video Title</FormLabel>
							<TextField
								size="small"
								defaultValue={data?.title}
								{...register("title")}
								placeholder="Video Title"
								InputProps={{
									endAdornment: <PencilIcon />,

									sx: {
										borderRadius: 2,
									},
								}}
							/>
						</FormControl>
						<FormControl
							fullWidth
							sx={formControlStyle}
							{...register("category")}>
							<FormLabel>Category</FormLabel>
							<SelectTextField />
						</FormControl>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel>Add Hashtag</FormLabel>
							<TextField
								size="small"
								defaultValue={data?.title}
								{...register("tags")}
								placeholder="Keyword"
								InputProps={{
									endAdornment: <AddBoxTwoTone sx={{ mr: -0.5 }} />,

									sx: {
										borderRadius: 2,
									},
								}}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel>Subject</FormLabel>
							<TextField
								size="small"
								defaultValue={data?.subject}
								{...register("subject")}
								placeholder="Subject"
								InputProps={{
									endAdornment: <PencilIcon />,

									sx: {
										borderRadius: 2,
									},
								}}
							/>
						</FormControl>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel>Primers</FormLabel>
							<SelectTextField />
						</FormControl>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel>Current Hashtag</FormLabel>
							<TextField
								size="small"
								defaultValue={data?.tags}
								{...register("tags")}
								placeholder="Current Hashtag"
								InputProps={{
									endAdornment: <PencilIcon />,

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
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "left",
							}}>
							Levels
						</Divider>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth sx={{ ...formControlStyle, marginTop: 0 }}>
							<FormLabel>Level 1</FormLabel>
							<SelectTextField />
						</FormControl>
						<FormControl
							fullWidth
							sx={{ ...formControlStyle, marginBottom: { sm: 2 } }}>
							<FormLabel>Level 2</FormLabel>
							<SelectTextField />
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth sx={{ ...formControlStyle, marginTop: 0 }}>
							<FormLabel>Level 3</FormLabel>
							<SelectTextField />
						</FormControl>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel>Level 4</FormLabel>
							<SelectTextField />
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
