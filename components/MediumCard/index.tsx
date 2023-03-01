import Image from 'next/image';

interface MediumCardProps {
	img: string;
	title: string;
}

const MediumCard = ({ img, title }: MediumCardProps) => {
	return (
		<div className="transition duration-300 ease-out transform cursor-pointer hover:scale-105">
			<div className="relative h-80 w-80">
				<Image src={img} alt={title} fill className="rounded-xl" />
			</div>
			<h3 className="mt-3 text-2xl">{title}</h3>
		</div>
	);
};

export default MediumCard;
