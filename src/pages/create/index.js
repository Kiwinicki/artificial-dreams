import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout } from '../../components/Layout/Layout';
import { MODELS, MODELS_LINKS } from '../../constants';
import { StyledLink } from '../../components/UI/StyledLink';

const CreatePage = () => {
	const linkClasess =
		'flex justify-center items-center aspect-square border-on-background border-2 text-center relative hover:scale-[1.025] duration-150 ease-in-out';
	const imgClasses =
		'absolute brightness-50 hover:brightness-[0.4] blur-none hover:blur-sm duration-150 ease-in-out w-full';
	const pClasses =
		'font-semibold text-lg z-[1] [&+img]:hover:brightness-[0.4] [&+img]:hover:blur-sm';

	return (
		<Layout>
			<h2 className="text-center text-xl font-semibold">
				Choose model for your prompts:
			</h2>
			<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5">
				{Object.values(MODELS).map(({ route, bgImg, name }) => (
					<Link to={route} className={linkClasess} key={route}>
						<span className={pClasses}>{name}</span>
						<img src={bgImg} alt="" className={imgClasses} />
					</Link>
				))}
			</div>
			<h2 className="text-center text-xl font-semibold">
				Links to other external models:
			</h2>
			<div className="flex gap-5 p-5">
				{MODELS_LINKS.map(({ name, key, url }) => (
					<StyledLink to={url} target="_blank" key={key}>
						{name}
					</StyledLink>
				))}
			</div>
		</Layout>
	);
};

export default CreatePage;
