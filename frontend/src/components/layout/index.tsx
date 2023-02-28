import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const drawerWidth = 260;
const useStyles = makeStyles((theme: any) => ({
	content: {
		...theme.typography.mainContent,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		marginTop: 70,
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		[theme.breakpoints.up("md")]: {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: "20px",
			width: `calc(100% - ${20}px)`,
			padding: "16px",
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: "10px",
			width: `calc(100% - ${10}px)`,
			padding: "16px",
			marginRight: "10px",
		},
		padding: 30,
		paddingLeft: 50,
	},
}));

type props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: props) => {
	const classes = useStyles();
	const [showMenuIcon, setShowMenuIcon] = useState(false); // used to show menu icon on small screen to hide sidebar
	const [showDrawer, setShowDrawer] = useState(false); //used to set drawer open or not
	const handleToggleMenu = () => {
		setShowDrawer(!showDrawer);
	};

	window.addEventListener("resize", () => {
		if (window.innerWidth <= 899) {
			setShowMenuIcon(true);
		} else {
			setShowMenuIcon(false);
		}
	});

	return (
		<div>
			<Header handleToggleMenu={handleToggleMenu} showMenuIcon={showMenuIcon} />
			<Sidebar
				showMenuIcon={showMenuIcon}
				showDrawer={showDrawer}
				handleToggleMenu={handleToggleMenu}
			/>
			<main className={classes.content}>{children}</main>
		</div>
	);
};

export default MainLayout;
