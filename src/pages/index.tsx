import Head from 'next/head';
import UserComponent from '@components/User';
import { GetStaticProps } from 'next';

import { User } from '@models/user';

import { useFetch } from '@hooks/useFetch';
import { fetcher } from '@services/api';
const { API_BASE_URL } = process.env;

export const getStaticProps: GetStaticProps = async () => {
	const response: User = await fetcher(`${API_BASE_URL}/users/gmatthewsfeuer`);

	return {
		props: { user: response },
		revalidate: 30,
	};
};

export default function Home({ user }) {
	const { data } = useFetch(`${API_BASE_URL}/users/gmatthewsfeuer`, user);

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
}
