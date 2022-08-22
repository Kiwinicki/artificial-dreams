import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'react-intl';

import { Layout } from '../components/Layout';
import { StyledLink } from '../components/UI/StyledLink';
import { HeroSection } from '../components/HeroSection/HeroSection';

const IndexPage = ({ pageContext }) => {
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
		<Layout {...pageContext}>
			<HeroSection />
			<section className="p-5 flex flex-wrap md:flex-nowrap justify-center gap-5 items-center max-w-screen-xl m-auto">
				<StaticImage
					src="../images/working-app-screenshot.png"
					alt="Screenshot from working app"
					placeholder="blurred"
					className="md:basis-1/2 border-on-background border-2"
				/>
				<p className="md:basis-1/2">
					<FormattedMessage id="create-and-share" />
				</p>
			</section>
			<section className="p-5 flex justify-center gap-5 items-center max-w-screen-xl m-auto">
				<div className="flex flex-col gap-2">
					{nodes.map(({ name, route, key }) => (
						<Link to={route} className={modelClasess} key={key}>
							{name}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-4">
					<p>
						<FormattedMessage id="choose-model" />
					</p>
					<p className="flex gap-2">
						<ArrowLeft />
						<FormattedMessage id="check-out" />
					</p>
				</div>
			</section>
			<section>
				<p className="p-5 text-center">
					<FormattedMessage id="start-creating" />{' '}
					<StyledLink internal to="/create">
						<FormattedMessage id="start-creating-link" />
					</StyledLink>
				</p>
			</section>
		</Layout>
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
