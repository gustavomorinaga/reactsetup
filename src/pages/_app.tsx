import { AppProps } from 'next/app';

import '@styles/reset.scss';
import '@styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default MyApp;
