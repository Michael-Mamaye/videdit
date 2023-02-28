import { Typography } from "@mui/material";

type titleProp = {
	title: string;
};
export const Title = ({ title }: titleProp) => (
	<Typography fontWeight="bold" variant="h5">
		{title}
	</Typography>
);
