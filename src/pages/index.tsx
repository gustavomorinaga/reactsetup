import Head from 'next/head';
import UserComponent from '@components/User';

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>New Next.js Project</title>
			</Head>

			<main>
				<UserComponent />
			</main>
		</>
	);
};

export default Home;
