import React from 'react';
import { TranslatedLink } from './TranslatedLink';
import { siteMetadata } from '../../../gatsby-config';
import { StaticImage } from 'gatsby-plugin-image';

export const LogoLink = () => (
	<TranslatedLink to="/" className="block">
		<StaticImage
			src="../../images/logo-with-text.png"
			alt={`${siteMetadata.title} logo`}
			className="w-32 xs:w-36"
		/>
	</TranslatedLink>
);
