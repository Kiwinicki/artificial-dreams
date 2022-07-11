import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout } from '../../components/Layout/Layout';
import { MODELS, MODELS_LINKS } from '../../constants';
import { StyledLink } from '../../components/UI/StyledLink';
import { states, useFetch } from '../../hooks/useFetch';

const CreatePage = () => {
	const linkClasess =
		'aspect-square border-on-background border-2 flex justify-center items-center text-center p-4 relative hover:scale-[1.025] duration-150 ease-in-out';
	const imgClasses =
		'absolute brightness-50 hover:brightness-[0.4] blur-none hover:blur-sm duration-150 ease-in-out';

	return (
		<Layout>
			<h2 className="text-center text-xl font-semibold">
				Choose model for your prompts:
			</h2>
			<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5">
				{MODELS.map(({ route, bgImg, name }) => (
					<Link to={route} className={linkClasess} key={route}>
						<p className="font-semibold text-lg z-[1]">{name}</p>
						<img src={bgImg} alt="" className={imgClasses} />
					</Link>
				))}
				{/* <Link to="/create/latentdiffusion" className={linkClasess}>
					<p className="font-semibold text-lg z-[1]">Latent Diffusion</p>
					<img src={latentDiffusionBg} alt="" className={imgClasses} />
				</Link>
				<Link to="/create/stylegan" className={linkClasess}>
					<p className="font-semibold text-lg z-[1]">StyleGAN XL + CLIP</p>
					<img src={latentDiffusionBg} alt="" className={imgClasses} />
				</Link>
				<Link to="/create/vdiffusion" className={linkClasess}>
					<p className="font-semibold text-lg z-[1]">V-Diffusion</p>
					<img src={latentDiffusionBg} alt="" className={imgClasses} />
				</Link>
				<Link to="/create/vqgan" className={linkClasess}>
					<p className="font-semibold text-lg z-[1]">
						VQGAN+CLIP (Hypertron v2)
					</p>
					<img src={vqganBg} alt="" className={imgClasses} />
				</Link>{' '}
				*/}
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
