import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { motion } from 'framer-motion';

import SEO from '../../next-seo.config';

// --- Styles ---
import '@styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	const pageEffects: any = {
		pageInitial: {
			scale: 0.8,
			opacity: 0,
		},
		pageAnimate: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.4,
			},
		},
	};

	return (
		<motion.div
			key={router.route}
			initial="pageInitial"
			animate="pageAnimate"
			variants={pageEffects}
			style={{ width: '100%', height: '100%' }}
		>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</motion.div>
	);
};

export default MyApp;
