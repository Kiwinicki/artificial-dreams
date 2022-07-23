import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

import { MainLayout } from '../components/Layouts/MainLayout';
import { StyledLink } from '../components/UI/StyledLink';
import { HeroSection } from '../components/HeroSection/HeroSection';

const IndexPage = () => {
	const {
		allModelsJson: { nodes },
	} = useStaticQuery(graphql`
		{
			allModelsJson {
				nodes {
					name
					route
					key
				}
			}
		}
	`);

	return (
		<MainLayout>
			<HeroSection />
			<section className="p-5 flex justify-center gap-5 items-center max-w-screen-lg m-auto">
				{/* <img src={``} alt="" /> TODO: screenshot from working application */}
				<div className="w-1/2 h-64 bg-red-500 flex justify-center items-center">
					placeholder image
				</div>
				Create your own artworks and share or print it. You can use different
				styles and set many other options.
			</section>
			<section className="p-5 flex justify-center gap-5 items-center max-w-screen-lg m-auto">
				<div className="flex flex-col gap-2">
					{nodes.map(({ name, route, key }) => (
						<Link to={route} className={modelClasess} key={key}>
							{name}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-4">
					<p>
						Choose from different models to find the best tool for making your
						ideas real.
					</p>
					<p className="flex gap-2">
						<ArrowLeft />
						Check out this models!
					</p>
				</div>
			</section>
			<section>
				<p className="p-5 text-center">
					What are you waiting for? Start{' '}
					<StyledLink internal to="/create">
						creating!
					</StyledLink>
				</p>
			</section>
		</MainLayout>
	);
};

export default IndexPage;

const modelClasess =
	'bg-on-background text-background py-1 px-2 font-semibold border-2 border-on-surface hover:bg-background hover:text-on-background hover:border-2 duration-200 ease-in-out text-center';

const ArrowLeft = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-6 w-6 mr-2 animate-bounce-horizontal"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M10 19l-7-7m0 0l7-7m-7 7h18"
		/>
	</svg>
);
