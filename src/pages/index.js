import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

import { Layout } from '../components/Layout';
import { StyledLink } from '../components/UI/StyledLink';
import { HeroSection } from '../components/HeroSection/HeroSection';

import { FormattedMessage } from 'react-intl';
import { TranslatedLink } from '../components/UI/TranslatedLink';
import pageMessages from '../i18n/translations/index.json';

const IndexPage = ({ pageContext: { language, messages } }) => {
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

	const allMessages = { ...messages, ...pageMessages[language] };

	return (
		<Layout language={language} messages={allMessages}>
			<HeroSection />
			<section className="p-5 flex justify-center gap-5 items-center max-w-screen-lg m-auto">
				{/* <img src={``} alt="" /> TODO: screenshot from working page */}
				<div className="w-1/2 h-64 bg-red-500 flex justify-center items-center">
					placeholder image
				</div>
				<p>
					<FormattedMessage
						id="create-and-share"
						defaultMessage="Create your own artworks and share or print it. You can use different styles and set many other parameters."
					/>
				</p>
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
						<FormattedMessage
							id="choose-model"
							defaultMessage="Choose from different models to find the best tool for making your
						ideas real."
						/>
					</p>
					<p className="flex gap-2">
						<ArrowLeft />
						<FormattedMessage
							id="check-out"
							defaultMessage="Check out this models!"
						/>
					</p>
				</div>
			</section>
			<section>
				<p className="p-5 text-center">
					<FormattedMessage
						id="start-creating"
						defaultMessage="What are you waiting for?"
					/>{' '}
					<StyledLink internal to="/create">
						<FormattedMessage
							id="start-creating-link"
							defaultMessage="Start creating!"
						/>
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
