import Image from 'next/image';
import {
	MagnifyingGlassIcon,
	GlobeAltIcon,
	Bars3Icon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/20/solid';

const Header = () => {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
			{/* Left */}
			<div className="relative flex items-center h-10 my-auto cursor-pointer">
				<Image
					src="https://links.papareact.com/qd3"
					fill
					className="object-contain object-left"
					alt="Airbnb Logo"
				/>
			</div>

			{/* Mid - Search Bar */}
			<div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
				<input
					type="text"
					placeholder="Start your search"
					className="flex-grow pl-5 text-gray-600 placeholder-gray-400 bg-transparent outline-none"
				/>
				<MagnifyingGlassIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex" />
			</div>

			{/* Right */}
			<div className="flex items-center justify-end space-x-4 text-gray-500">
				<p className="hidden cursor-pointer md:inline">Become a host</p>
				<GlobeAltIcon className="h-6 cursor-pointer" />

				<div className="flex items-center p-2 space-x-2 border-2 rounded-full">
					<Bars3Icon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
			</div>
		</header>
	);
};

export default Header;
