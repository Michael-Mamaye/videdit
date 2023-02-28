import {
	AppBar,
	Avatar,
	Box,
	IconButton,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowDropDownOutlined, SearchOutlined } from "@mui/icons-material";

type props = {
	handleToggleMenu: () => void;
	showMenuIcon: boolean;
};
const flexRowBoxStyle = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
};
const Header = ({ handleToggleMenu, showMenuIcon }: props) => {
	return (
		<AppBar
			position="fixed"
			elevation={1}
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}>
			<Toolbar sx={{ border: "none" }}>
				<Box
					sx={{
						...flexRowBoxStyle,
						justifyContent: "space-between",
						width: "100%",
					}}>
					<Box
						sx={{
							...flexRowBoxStyle,
							justifyContent: "center",
						}}>
						{showMenuIcon && (
							<IconButton onClick={() => handleToggleMenu()}>
								<MenuIcon sx={{ fontSize: 33, fontWeight: "bold" }} />
							</IconButton>
						)}
						<Box
							component="span"
							sx={{
								...flexRowBoxStyle,
								justifyContent: "center",
								width: showMenuIcon ? 100 : 200,
							}}>
							<Typography fontWeight="bold" variant="h4">
								Logo
							</Typography>
						</Box>
					</Box>
					<Box sx={{ ...flexRowBoxStyle }}>
						<TextField
							fullWidth
							id="navbar-searchfield"
							size="small"
							variant="filled"
							hiddenLabel
							placeholder="Search Here"
							InputProps={{
								endAdornment: (
									<IconButton>
										<SearchOutlined />
									</IconButton>
								),
								disableUnderline: true,
								sx: {
									width: { sm: 160, md: 450 },
									borderRadius: 2,
								},
							}}
						/>
						<Box sx={{ ...flexRowBoxStyle, marginLeft: 5 }}>
							<Avatar />
							<ArrowDropDownOutlined />
						</Box>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
