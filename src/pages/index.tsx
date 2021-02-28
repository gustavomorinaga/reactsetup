import Head from 'next/head';
import UserComponent from '@components/User';

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>Novo Projeto</title>
			</Head>

			<main>
				<UserComponent />
			</main>
		</>
	);
};

export default Home;
