import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

const Post = ({ postData }) => {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
};

// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export const getStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		// https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
		fallback: false,
	};
};

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export const getStaticProps = async (props) => {
	const postData = await getPostData(props.params.id);
	return {
		props: {
			postData,
		},
	};
};

export default Post;
