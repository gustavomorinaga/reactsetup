import Head from 'next/head';
import Greetings from '../components/Greetings';

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>

			<main>
				<Greetings />
			</main>
		</>
	);
};

export default Home;
