export type PostProps = {
	postData: PostDataType;
};

export type PostDataType = {
	id: string;
	contentHtml?: string;
	title: string;
	date: string;
};
