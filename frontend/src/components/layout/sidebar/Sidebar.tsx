import { Dashboard, Person, Notifications } from "@mui/icons-material";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { ReportIcon } from "../../shared-components/icons/ReportIcon";

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
/**
 *
 * @param   Sidebar is a drawer component which is
 * 					- fixed when the size of the screen is  greater than 899
 * 					- temporary if the size of the screen is <= 899
 * @param showMenuIcon is a boolean value which will be true
 * 					when drawer variant is temporary.
 * @param handleToggleMenu is used to set showMenuIcon to true or false
 * @returns drawer component i.e the sidebar
 */

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
		{ name: "Reports", routeTo: "/reports", icon: <ReportIcon /> },
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
								borderLeft: "5px solid #ffffff",
								"&.Mui-selected": {
									backgroundColor: "#D1E9FD",
									borderLeft: "5px solid #0056ff",
									color: "#0056ff",
								},
								"&:hover": {
									backgroundColor: "#D1E9FD",
									borderLeft: "5px solid #0056ff",
									color: "#0056ff",
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
