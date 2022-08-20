import React from 'react';
import { TranslatedLink } from '../UI/TranslatedLink';
import heroImage from '../../images/hero-image.png';
import { IntlProvider, useIntl, FormattedMessage } from 'react-intl';
import translations from '../../i18n/translations.json';

export const HeroSection = () => {
	const { locale } = useIntl();

	return (
		<IntlProvider locale={locale} messages={translations[locale].HeroSection}>
			<section className="relative flex justify-center items-center flex-col h-[85vh] md:h-[75vh] gap-[4rem] p-5 text-center">
				<div className="z-[1] flex justify-center items-center flex-col gap-[4rem]">
					<h2 className="text-on-background font-semibold text-2xl sm:text-3xl">
						<FormattedMessage
							id="generate-images"
							defaultMessage="Generate your own images with power of AI"
						/>
					</h2>
					<HeroButton />
				</div>
				<div className="w-full h-full absolute top-0 bg-hero-section">
					<img
						src={heroImage}
						alt=""
						className="w-full h-full absolute top-0 z-[-1] object-cover brightness-75 after:bg-gradient-to-b after:from-background"
					/>
				</div>
			</section>
		</IntlProvider>
	);
};

const HeroButton = () => {
	return (
		<TranslatedLink
			to="/create"
			className="p-3 relative text-white text-base sm:text-lg font-semibold border-white hover:backdrop-blur-[2px] border-[3px] hover:scale-110 duration-200 ease-in-out"
		>
			Start now
		</TranslatedLink>
	);
};
