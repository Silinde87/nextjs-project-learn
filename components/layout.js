import Script from 'next/script';
// https://nextjs.org/docs/api-reference/next/script
import Head from 'next/head';
// https://nextjs.org/docs/api-reference/next/head
import Image from 'next/image';
// https://nextjs.org/docs/api-reference/next/image
import Link from 'next/link';
// https://nextjs.org/docs/api-reference/next/link
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Silinde87';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home }) => {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Learn how to build a personal website using Next.js" />
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Script
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnload"
				onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
			/>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<Image
									priority
									src="/images/profile.jpg"
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Layout;
