import Head from 'next/head';
import UserComponent from '@components/User';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { IUser } from '@interfaces/IUser';

import { useFetch } from '@hooks/useFetch';

const UserPage: NextPage = () => {
	const { query } = useRouter();
	const { login } = query;

	const { data, error } = useFetch<IUser>(`users/${login}`);

	return (
		<>
			<Head>
				<title>{login && !error ? `👤 ${login}` : !error ? 'Loading...' : 'Erro!'}</title>
			</Head>

			<main>
				<UserComponent user={data} error={error} />
			</main>
		</>
	);
};

export default UserPage;
