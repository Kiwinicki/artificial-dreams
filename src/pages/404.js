import * as React from 'react';
import { Layout } from '../components/Layout';

const NotFoundPage = ({ pageContext: { language, messages } }) => {
	return (
		<Layout
			className="flex justify-center items-center"
			language={language}
			messages={messages}
		>
			{/* TODO: change this page*/}
			<p className="text-lg font-bold">Error 404. Page not found</p>
		</Layout>
	);
};

export default NotFoundPage;
