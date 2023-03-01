export const getFormattedDate = (date: string): String => {
	var today = new Date(date);

	return today.toLocaleString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
};
export const getTimeFromDate = (date: string) => {
	var today = new Date(date);

	return today.toLocaleTimeString("en-US", {
		hour: "2-digit",
		hour12: true,
		minute: "2-digit",
		hourCycle: "h12",
	});
};
export const getThousandsToK = (data: number): string => {
	return `${data}K`;
};
