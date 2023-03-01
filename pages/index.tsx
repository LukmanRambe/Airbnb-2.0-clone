import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

const Home: NextPage = ({ exploreData, cardsData }) => {
	return (
		<div>
			<Head>
				<title>Airbnb Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Banner />

			<main className="px-8 mx-auto max-w-7xl sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold">Explore Nearby</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData?.map(
							({
								img,
								location,
								distance,
							}: {
								img: string;
								location: string;
								distance: string;
							}) => (
								<SmallCard
									key={img}
									img={img}
									location={location}
									distance={distance}
								/>
							)
						)}
					</div>
				</section>

				<section>
					<h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

					<div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
						{cardsData?.map(
							({ img, title }: { img: string; title: string }) => (
								<MediumCard key={img} img={img} title={title} />
							)
						)}
					</div>
				</section>

				<section>
					<LargeCard
						img="https://links.papareact.com/4cj"
						title="The Greatest Outdoors"
						description="Wishlists curated by Airbnb"
						buttonText="Get Inspired"
					/>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
		(res) => res.json()
	);

	const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
		(res) => res.json()
	);

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
