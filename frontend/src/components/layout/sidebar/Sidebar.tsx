import { Dashboard, Person, Report, Notifications } from "@mui/icons-material";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 220;
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
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const menusData = [
		{ name: "Dashboard", routeTo: "/dashboard", icon: <Dashboard /> },
		{ name: "Users", routeTo: "/users", icon: <Person /> },
		{
			name: "Notifications",
			routeTo: "/notifications",
			icon: <Notifications />,
		},
		{ name: "Reports", routeTo: "/reports", icon: <Report /> },
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
							selected={pathname.includes(item.routeTo)}
							onClick={() => {
								navigate(item.routeTo);
							}}
							sx={{
								paddingLeft: 3,
								marginBottom: "10px",
								"&.Mui-selected": {
									backgroundColor: "#D1E9FD",
									borderLeft: "5px solid #1769aa",
									color: "#1769aa",
								},
								"&.Mui-focus": {
									backgroundColor: "#D1E9FD",
									borderLeft: "5px solid #1769aa",
									color: "#1769aa",
								},

								"&:hover": {
									backgroundColor: "#D1E9FD",
									borderLeft: "5px solid #1769aa",
									color: "#1769aa",
								},
							}}>
							{item.icon}
							<ListItemText primary={item.name} sx={{ marginLeft: 3 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
