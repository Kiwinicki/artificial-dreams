import React from 'react';
import { Layout } from '../components/Layout';

const TipsPage = ({ pageContext: { language, messages } }) => {
	return (
		<Layout language={language} messages={messages}>
			Tips, prompt engineering
		</Layout>
	);
};

export default TipsPage;
