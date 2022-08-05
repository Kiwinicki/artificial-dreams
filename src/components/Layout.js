import React from 'react';

import { Header } from './Header/Header';
import { Footer } from './Footer';

export const Layout = ({ children, className }) => {
	return (
		<>
			<Header />
			<main className={`${className} grow`}>{children}</main>
			<Footer />
		</>
	);
};
