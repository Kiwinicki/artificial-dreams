import React from 'react';
import { TranslatedLink } from './TranslatedLink';
import logoWithText from '../../images/logo-with-text.png';
import { siteMetadata } from '../../../gatsby-config';

export const LogoLink = () => (
	<TranslatedLink to="/" className="block">
		<img
			src={logoWithText}
			alt={`${siteMetadata.title} logo`}
			className="w-32 xs:w-36"
		/>
	</TranslatedLink>
);
