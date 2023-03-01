export type HomePageProps = {
	exploreData: {
		map(
			arg0: ({
				img,
				location,
				distance,
			}: {
				img: string;
				location: string;
				distance: string;
			}) => JSX.Element
		): import('react').ReactNode;
		img: string;
		location: string;
		distance: string;
	};
	cardsData: {
		map(
			arg0: ({ img, title }: { img: string; title: string }) => JSX.Element
		): import('react').ReactNode;
		img: string;
		title: string;
	};
};
