import { Box, Typography } from "@mui/material";
import React from "react";

type props = {
	cardName: string;
	amounts: string;
	icon: React.ReactElement;
};

const MiniCard = ({ cardName, amounts, icon }: props) => {
	return (
		<Box
			sx={{
				backgroundColor: "white",
				borderRadius: 3,
				padding: 3,
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<Box>
				<Typography>{cardName}</Typography>
				<Typography sx={{ fontWeight: 900, fontSize: 25 }}>
					{amounts}
				</Typography>
			</Box>
			<Box>{icon}</Box>
		</Box>
	);
};

export default MiniCard;
