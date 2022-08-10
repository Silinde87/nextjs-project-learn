// https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-404-page
import utilStyles from "./../styles/utils.module.css";

const Custom404: React.FC = () => {
	return <h1 className={utilStyles.headingXl}>404 - Page not found</h1>;
};

export default Custom404;

// https://nextjs.org/docs/api-reference/next.config.js/redirects
/*
export async function getStaticProps(context) {
    return {
      redirect: {
        destination: '/',
        permanent: true, // triggers 308
      },
    };
}
*/