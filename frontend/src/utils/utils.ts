/**
 * @param getFormattedDate  takes a date prop which should always be valid date string
 * @returns  a date in the format of may 3, 2022
 *
 */

export const getFormattedDate = (date: string): String => {
	var today = new Date(date);

	return today.toLocaleString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
};
/**
 * @param getTimeFromDate takes a valid date string
 * @returns a two digit hour and minute 04:20 pm
 */
export const getTimeFromDate = (date: string) => {
	var today = new Date(date);

	return today.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	});
};

/**
 * @param getThousandsToK takes a number and this function adds k at the end
 * @returns a string in the format of 10K, 
 */
export const getThousandsToK = (data: number): string => {
	return `${data}K`;
};
