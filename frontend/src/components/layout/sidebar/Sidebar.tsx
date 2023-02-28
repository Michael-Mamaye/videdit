import { Dashboard, Person, Report, Notifications } from "@mui/icons-material";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const drawerWidth = 260;
const useStyles = makeStyles((theme: any) => ({
	drawerPaper: {
		width: drawerWidth,
		background: theme.palette.background.default,
		color: theme.palette.text.primary,
		paddingTop: 100,
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
}));

type props = {
	showMenuIcon: boolean;
	showDrawer: boolean;
	handleToggleMenu: () => void;
};
const Sidebar = ({ showMenuIcon, showDrawer, handleToggleMenu }: props) => {
	const classes = useStyles();
	const menusData = [
		{ name: "Dashboard", icon: <Dashboard /> },
		{ name: "Users", icon: <Person /> },
		{ name: "Notifications", icon: <Notifications /> },
		{ name: "Reports", icon: <Report /> },
	];
	return (
		<Drawer
			variant={showMenuIcon ? "temporary" : "permanent"}
			anchor="left"
			open={showDrawer}
			onClose={handleToggleMenu}
			classes={{
				paper: classes.drawerPaper,
			}}
			ModalProps={{ keepMounted: true }}
			color="inherit"
			sx={{ "& .MuiDrawer-paper": { borderWidth: 0 } }}>
			<List>
				{menusData.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton
							selected={item.name === "Dashboard"}
							sx={{
								paddingLeft: 6,
								marginBottom: "10px",
								"&.Mui-selected": {
									backgroundColor: "#D1E9FD",
									borderLeft: "5px solid #1769aa",
									color: "#1769aa",
								},
								":hover": {
									backgroundColor: "#D1E9FD",
									borderLeft: "5px solid #1769aa",
									color: "#1769aa",
								},
							}}>
							<ListItemIcon
								sx={{
									color: item.name === "Dashboard" ? "#1769aa" : "",
								}}>
								{item.icon}
							</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
