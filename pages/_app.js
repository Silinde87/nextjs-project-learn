// Set global styles at custom App
// https://nextjs.org/docs/advanced-features/custom-app

import '../styles/global.css';

const App = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
