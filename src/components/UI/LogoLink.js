import React from 'react';
import { Link } from 'gatsby';
import logoWithText from '../../images/logo-with-text.png';
import { siteMetadata } from '../../../gatsby-config';

export const LogoLink = () => (
	<Link to="/" className="block">
		<img
			src={logoWithText}
			alt={`${siteMetadata.title} logo`}
<<<<<<< HEAD
			className="w-32 xs:w-36"
=======
			className="w-40"
>>>>>>> c1e9c44 (created CreatePage, TODO: add invidual bg images for all models)
		/>
	</Link>
);
