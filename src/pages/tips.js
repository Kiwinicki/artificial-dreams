import React from 'react';
import { StyledLink } from '../components/UI/StyledLink';
import { Layout } from '../components/Layout';
import { FormattedMessage } from 'react-intl';

const TipsPage = ({ pageContext }) => {
	return (
		<Layout {...pageContext}>
			<section className="p-5 flex flex-col gap-4 max-w-screen-xl m-auto">
				<h2 className="text-center text-xl font-semibold">
					<FormattedMessage id="title" />
				</h2>
				<p>
					<FormattedMessage id="p1" />
				</p>
				<p>
					<FormattedMessage id="p2-1" />{' '}
					<StyledLink to="https://knn5.laion.ai/?back=https%3A%2F%2Fknn5.laion.ai%2F&index=laion_400m&useMclip=false&query=dog">
						<FormattedMessage id="p2-link" />
					</StyledLink>
					<FormattedMessage id="p2-2" />
				</p>
				<p>
					<StyledLink to="https://imgur.com/a/SnSIQRu">
						<FormattedMessage id="p3-link" />
					</StyledLink>{' '}
					<FormattedMessage id="p3-1" />{' '}
					<StyledLink internal to="/create/vqgan">
						<FormattedMessage id="p3-link2" />
					</StyledLink>
				</p>
			</section>
		</Layout>
	);
};

export default TipsPage;
