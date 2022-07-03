import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../../components/Layout/Layout';
import latentDiffusionBg from '../../images/latent-diffusion-bg.png';

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
				<Link to="/create/latentdiffusion" className={linkClasess}>
					<p className="font-semibold text-lg z-[1]">Latent Diffusion</p>
					<img src={latentDiffusionBg} alt="" className={imgClasses} />
				</Link>
				{/* <p>Good image coherence and weak difficult prompts match</p> */}
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
					<img src={latentDiffusionBg} alt="" className={imgClasses} />
				</Link>
				{/* TODO: drop-down list of features? */}
				{/* <p>Weak image coherence and good difficult prompts match</p> */}
				<Link to="/create/rudalle" className={linkClasess}>
					<p className="font-semibold text-lg z-[1]">ruDALLE</p>
					<img src={latentDiffusionBg} alt="" className={imgClasses} />
				</Link>
				{/* TODO: info appear after hover on link */}
				{/* <ul>
						<li>Good image coherence and weak difficult prompts match</li>
						<li>Understands English and Russian prompts</li>
					</ul> */}
			</div>
		</Layout>
	);
};

export default CreatePage;
