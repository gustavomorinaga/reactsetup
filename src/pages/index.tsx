import Head from 'next/head';
import UserComponent from '@components/User';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import { User } from '@models/user';

import { useFetch } from '@hooks/useFetch';
import { fetcher } from '@services/api';

const login = ''; // <- Put your login here!

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetcher<User>(`users/${login}`);

	return {
		props: { user: response },
		revalidate: 120,
	};
};

const Home: NextPage = ({
	user,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { data } = useFetch<User>(`users/${login}`, user);

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
