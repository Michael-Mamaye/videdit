import {
	AppBar,
	Avatar,
	Box,
	IconButton,
	Popover,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchOutlined } from "@mui/icons-material";
import { ChevronDown } from "../../shared-components/icons/ChevronDown";
import { useState } from "react";

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
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar
			position="fixed"
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
				boxShadow: "0px 2px 5px #ECEFF5",
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
									width: { xs: 130, sm: 260, md: 450 },
									borderRadius: 2,
								},
							}}
						/>
						<Box
							id="profileMenu"
							sx={{
								...flexRowBoxStyle,
								marginLeft: { xs: 1, sm: 5 },
								":hover": {
									cursor: "pointer",
								},
							}}
							onClick={(e) => handleClick(e)}>
							<Avatar src={require("../../../assets/profile.png")} />
							<ChevronDown />
						</Box>
					</Box>
				</Box>
				<Popover
					id="profileMenu"
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}>
					<Box sx={{ minWidth: 400, p: 5 }}>
						<Box sx={{ ...flexRowBoxStyle, columnGap: 2 }}>
							<Avatar src={require("../../../assets/profile.png")} />
							<Box>
								<Typography>Mike MG</Typography>
								<Typography variant="body2" color="text.secondary">
									@mikemg
								</Typography>
							</Box>
						</Box>
					</Box>
				</Popover>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
