import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
<<<<<<< HEAD
			<main className="grow">{children}</main>
=======
			<main>{children}</main>
>>>>>>> c1e9c44 (created CreatePage, TODO: add invidual bg images for all models)
			<Footer />
		</>
	);
};
