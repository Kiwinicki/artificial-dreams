import React from 'react';
import { Link } from 'gatsby';
import logoWithText from '../../images/logo-with-text.png';
import { siteMetadata } from '../../../gatsby-config';

export const LogoLink = () => (
	<Link to="/" className="block">
		<img
			src={logoWithText}
			alt={`${siteMetadata.title} logo`}
			className="w-32 xs:w-36"
		/>
	</Link>
);
