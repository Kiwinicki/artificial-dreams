import React, { useState } from 'react';

export const Lightbox = ({ images }) => {
	const [open, setOpen] = useState(false);
	const [currentImgIndex, setCurrentImgIndex] = useState(0);

	const openLightbox = (i) => {
		setCurrentImgIndex(i);
		setOpen(true);
		console.log('clicked');
	};

	const closeLightbox = () => {
		setOpen(false);
	};

	const goForward = () => {
		setCurrentImgIndex((index) =>
			index === images.length - 1 ? 0 : (index += 1)
		);
	};

	const goBack = () => {
		setCurrentImgIndex((index) =>
			index === 0 ? images.length - 1 : (index -= 1)
		);
	};

	return (
		<>
			{images.map(({ src, alt }, i) => (
				<img
					src={src}
					alt={alt}
					className="w-64 border-2 border-on-background hover:cursor-pointer"
					key={i}
					onClick={() => openLightbox(i)}
				/>
			))}
			{open && (
				<div className={lightboxBg}>
					<button onClick={goBack} className={navBtnClasses + 'left-4'}>
						<PrevIcon />
					</button>
					<img
						src={images[currentImgIndex].src}
						alt={images[currentImgIndex].alt}
						className="max-w-[70vw]"
					/>
					<button onClick={goForward} className={navBtnClasses + 'right-4'}>
						<NextIcon />
					</button>
					<div className="flex absolute top-4 right-4 gap-4">
						<a
							href={images[currentImgIndex].src}
							download={images[currentImgIndex].alt}
						>
							<DownloadIcon />
						</a>
						<button onClick={closeLightbox}>
							<CloseIcon />
						</button>
					</div>
				</div>
			)}
		</>
	);
};

const navBtnClasses =
	'absolute p-2 border-on-background border-2 hover:bg-surface/75 duration-150 hover: ';
const lightboxBg =
	'fixed left-0 top-0 w-full h-full flex justify-center items-center bg-black/80';

const PrevIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-8 w-8"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
	</svg>
);

const NextIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-8 w-8"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
	</svg>
);

const DownloadIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-8 w-8"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
		/>
	</svg>
);

const CloseIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-8 w-8"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
);
