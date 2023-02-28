export const getFormattedDate = (date: Date): String => {
	// var today = new Date(Date.parse(date));

	// return today
	// 	.toLocaleDateString("en-US", {
	// 		year: "numeric",
	// 		month: "short",
	// 		day: "numeric",
	// 	})
	// 	.replace(",", " ");

	// return date.toLocaleString("en-US", {
	// 	month: "long",
	// 	day: "numeric",
	// 	year: "numeric",
	// });
	return new Date(date).toDateString();
};
export const getThousandsToK = (data: number): string => {
	return `${data}K`;
};
