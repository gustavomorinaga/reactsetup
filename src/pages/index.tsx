import Head from 'next/head';
import UserComponent from '@components/User';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import { User } from '@models/user';

import { useFetch } from '@hooks/useFetch';
import { fetcher } from '@services/api';
const { API_BASE_URL } = process.env;

const login = 'gmatthewsfeuer'; // <- Put here your login!

export const getStaticProps: GetStaticProps = async () => {
	const response: User = await fetcher(`${API_BASE_URL}/users/${login}`);

	return {
		props: { user: response },
		revalidate: 120,
	};
};

const Home: NextPage = ({
	user,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { data } = useFetch(`users/${login}`, user);

	return (
		<>
			<Head>
				<title>New Next.js Project</title>
			</Head>

			<main>
				<UserComponent user={data} />
			</main>
		</>
	);
};

export default Home;
