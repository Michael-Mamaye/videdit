export interface DashboardStateType {
	title: string;
	timestamp: string;
	thumbnail: string;
	contentType: string;
	category: string;
	subject: string;
	primers: string;
	tags: string[];
	reactions: {
		views: number;
		comment: number;
		likes: number;
	};
	video: string;
	height: number;
	width: number;
	username: string;
	id: string;
	duration: number;
	creatorID: string;
}
