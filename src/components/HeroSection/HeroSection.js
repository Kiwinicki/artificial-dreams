import React from 'react';
<<<<<<< HEAD
import { Link } from 'gatsby';
import heroImage from '../../images/hero-image.png';

export const HeroSection = () => {
	return (
		<section className="relative flex justify-center items-center flex-col h-[85vh] md:h-[75vh] gap-[4rem] p-5 text-center">
=======
import heroImage from '../../images/hero-image.png';
import { HeroButton } from './HeroButton';

export const HeroSection = () => {
	return (
		<section className="relative flex justify-center items-center flex-col h-[85vh] md:h-[75vh] gap-[4rem] p-4 text-center">
>>>>>>> c1e9c44 (created CreatePage, TODO: add invidual bg images for all models)
			<div className="z-[1] flex justify-center items-center flex-col gap-[4rem]">
				<h2 className="text-on-background font-semibold text-2xl sm:text-3xl">
					Generate your own images with power of AI
				</h2>
				<HeroButton />
			</div>
			<div className="w-full h-full absolute top-0 bg-hero-section">
				<img
					src={heroImage}
					alt=""
<<<<<<< HEAD
					className="w-full h-full absolute top-0 z-[-1] object-cover brightness-75 after:bg-gradient-to-b after:from-background"
=======
					className="w-full h-full absolute top-0 z-[-1]  object-cover brightness-75 after:bg-gradient-to-b after:from-background"
>>>>>>> c1e9c44 (created CreatePage, TODO: add invidual bg images for all models)
				/>
			</div>
		</section>
	);
};
<<<<<<< HEAD

const HeroButton = () => {
	return (
		<Link
			to="/create"
			className="p-3 relative text-white text-base sm:text-lg font-semibold border-white hover:backdrop-blur-[2px] border-[3px] hover:scale-110 duration-200 ease-in-out"
		>
			Start now
		</Link>
	);
};
=======
>>>>>>> c1e9c44 (created CreatePage, TODO: add invidual bg images for all models)
