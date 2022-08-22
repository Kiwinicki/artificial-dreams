import React, { createContext } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer';
import { IntlProvider } from 'react-intl';

export const Layout = ({
	children,
	className = '',
	language,
	messages,
	originalPath,
}) => {
	return (
		<PageContext.Provider value={{ originalPath: originalPath || '/' }}>
			<IntlProvider locale={language} messages={messages}>
				<Header />
				<main className={`${className} grow`}>{children}</main>
				<Footer />
			</IntlProvider>
		</PageContext.Provider>
	);
};

export const PageContext = createContext({ originalPath: '/' });
