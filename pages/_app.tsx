// Set global styles at custom App
// https://nextjs.org/docs/advanced-features/custom-app

import '../styles/global.css';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
