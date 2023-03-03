import {
	Box,
	Button,
	Divider,
	FormControl,
	FormLabel,
	Grid,
	MenuItem,
	TextField,
	Typography,
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
const formLabelStyle = {
	fontWeight: "bold",
};
/**
 *
 * @param EditDashboardForm is used to update dashboard data
 * 						- it has data prop which is an object and it has the value
 * 							of a single dashboard data
 * @returns form div with input and submit & cancel button
 */
const EditDashboardForm = ({ data }: props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const onSubmit = handleSubmit((formData) => {
		let tags = data?.tags;
		const addHashtag = formData?.addHashtag;
		if (addHashtag) {
			const newTags = addHashtag.split(",");
			tags = tags.concat(newTags);
		}
		let newData = {
			...data,
			title: formData?.title.toString(),
			subject: formData?.subject.toString(),
			category: formData?.category.toString(),
			tags: tags,
		};
		dispatch(updateDashboardData({ id: data.id, data: newData }));
		navigate("/dashboard");
	});
	const SelectTextField = () => (
		<TextField
			disabled
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
		<Box sx={{ height: "100%" }}>
			<form
				onSubmit={onSubmit}
				style={{ position: "relative", height: "100%" }}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel sx={formLabelStyle}>Video Title</FormLabel>
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
							<FormLabel sx={formLabelStyle}>Category</FormLabel>
							<TextField
								hiddenLabel
								select
								size="small"
								defaultValue={data?.category}
								SelectProps={{
									IconComponent: ChevronDown,
								}}
								InputProps={{
									sx: {
										borderRadius: 2,
									},
								}}>
								<MenuItem value="Inspiration">Inspiration</MenuItem>
								<MenuItem value="Funny">Funny</MenuItem>
								<MenuItem value="Tragedy">Tragedy</MenuItem>
								<MenuItem value="Romance">Romance</MenuItem>
							</TextField>
						</FormControl>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel sx={formLabelStyle}>Add Hashtag</FormLabel>
							<TextField
								size="small"
								{...register("addHashtag")}
								placeholder="Keywords separated by comma"
								InputProps={{
									endAdornment: (
										<AddBoxTwoTone sx={{ mr: -0.5, opacity: 0.6 }} />
									),
									sx: {
										borderRadius: 2,
									},
								}}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel sx={formLabelStyle}>Subject</FormLabel>
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
							<FormLabel sx={formLabelStyle}>Primers</FormLabel>
							<SelectTextField />
						</FormControl>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel sx={formLabelStyle}>Current Hashtag</FormLabel>
							<TextField
								disabled
								size="small"
								defaultValue={data?.tags && data?.tags[data?.tags.length - 1]}
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
						<Box
							textAlign="left"
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "left",
							}}>
							<Typography fontWeight="bold" fontSize={20}>
								Levels
							</Typography>
							<Divider
								sx={{ flex: 1, marginLeft: 2, borderColor: "rgb(0,0,0,0.3)" }}
							/>
						</Box>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth sx={{ ...formControlStyle, marginTop: 0 }}>
							<FormLabel sx={formLabelStyle}>Level 1</FormLabel>
							<SelectTextField />
						</FormControl>
						<FormControl
							fullWidth
							sx={{ ...formControlStyle, marginBottom: { sm: 2 } }}>
							<FormLabel sx={formLabelStyle}>Level 2</FormLabel>
							<SelectTextField />
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth sx={{ ...formControlStyle, marginTop: 0 }}>
							<FormLabel sx={formLabelStyle}>Level 3</FormLabel>
							<SelectTextField />
						</FormControl>
						<FormControl fullWidth sx={formControlStyle}>
							<FormLabel sx={formLabelStyle}>Level 4</FormLabel>
							<SelectTextField />
						</FormControl>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={3}
					sx={{
						top: `calc(100% - ${5}px)`,
						marginBottom: 5,
						position: "absolute",
					}}>
					<Grid item xs={6}>
						<Button
							color="secondary"
							variant="outlined"
							onClick={() => {
								navigate("/dashboard");
							}}
							sx={{
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
