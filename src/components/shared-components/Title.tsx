import { Typography } from "@mui/material";

type titleProp = {
	title: string;
};
/**
 *
 * @param Title takes a string title prop
 * @returns a JSX Element with heading 5 bold title
 */
export const Title = ({ title }: titleProp) => (
	<Typography fontWeight="bold" variant="h5" mb={1}>
		{title}
	</Typography>
);
