import Link from 'next/link';
import { GetStaticProps } from 'next';
import Date from './../components/Date';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../services/posts';
import { HomeProps } from './home.types';

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
	return (
		<Layout home>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
};

// https://nextjs.org/docs/basic-features/data-fetching/overview#getstaticprops-static-generation
export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};

export default Home;
