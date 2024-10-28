export const useChangeTitle = () => {
	const changeTitle = (title: string) => {
		document.title = `${title} - ShikiLove`;
	};

	return { changeTitle };
};
