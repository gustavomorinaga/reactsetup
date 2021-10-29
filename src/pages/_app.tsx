import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configs ---
import SEO from '../../next-seo.config';

// --- Contexts ---
import GlobalContext from '@contexts/index';

// --- Styles ---
import '@styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router: { route } }) => {
	const pageEffects: any = {
		pageInitial: {
			scale: 0.8,
			opacity: 0,
		},
		pageAnimate: {
			scale: 1,
			opacity: 1,
		},
		pageExit: {
			scale: 0.8,
			opacity: 0,
		},
	};

	return (
		<GlobalContext>
			<AnimatePresence exitBeforeEnter={true}>
				<motion.div
					key={route}
					initial="pageInitial"
					animate="pageAnimate"
					exit="pageExit"
					variants={pageEffects}
					style={{ width: '100%', height: '100%' }}
				>
					<DefaultSeo {...SEO} />
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</GlobalContext>
	);
};

export default MyApp;
