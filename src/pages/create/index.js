import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout } from '../../components/Layout';
import { StyledLink } from '../../components/UI/StyledLink';
import { FormattedMessage } from 'react-intl';

const CreatePage = ({ pageContext: { language, messages, originalPath } }) => {
	const { allModelsJson, allModelsLinksJson } = useStaticQuery(graphql`
		{
			allModelsLinksJson {
				nodes {
					key
					name
					url
				}
			}
			allModelsJson {
				nodes {
					name
					route
					key
					bgImg {
						childImageSharp {
							gatsbyImageData(
								aspectRatio: 1
								placeholder: BLURRED
								formats: AUTO
							)
						}
					}
				}
			}
		}
	`);

	return (
		<Layout language={language} messages={messages}>
			<h2 className="text-center text-xl font-semibold">
				<FormattedMessage id="choose-model" />
			</h2>
			<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5">
				{allModelsJson.nodes.map(({ route, key, name, bgImg }) => {
					const image = getImage(bgImg);
					return (
						<Link to={route} className={linkClasess} key={key}>
							<span className={pClasses}>{name}</span>
							{/* FIXME: images don't appear after build */}
							<GatsbyImage
								image={image}
								alt=""
								className={imgClasses}
								style={{ position: 'absolute' }} // overriding GatsbyImage classes
							/>
						</Link>
					);
				})}
			</div>
			<h2 className="text-center text-xl font-semibold">
				<FormattedMessage id="links" />
			</h2>
			<div className="flex flex-wrap gap-5 p-5">
				{allModelsLinksJson.nodes.map(({ name, key, url }) => (
					<StyledLink to={url} target="_blank" key={key}>
						{name}
					</StyledLink>
				))}
			</div>
		</Layout>
	);
};

export default CreatePage;

const linkClasess =
	'flex justify-center items-center aspect-square border-on-background border-2 text-center relative hover:scale-[1.025] duration-150 ease-in-out';
const imgClasses =
	'brightness-50 hover:brightness-[0.4] blur-none hover:blur-sm duration-150 ease-in-out w-full aspect-square';
const pClasses =
	'font-semibold text-lg z-[1] [&+[data-gatsby-image-wrapper]]:hover:brightness-[0.4] [&+[data-gatsby-image-wrapper]]:hover:blur-sm p-1'; // [data-gatsby-image-wrapper] data attribute comes from GatsbyImage
