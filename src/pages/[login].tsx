import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { NextSeo } from 'next-seo';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

// --- Contexts ---
import UserContext from '@contexts/User';

// --- Hooks ---
import { useFetch } from '@hooks/useFetch';

// --- Components ---
import UserComponent from '@components/User';

const UserPage: NextPage = () => {
	const { query } = useRouter();
	const { login } = query;

	const { state } = useContext(UserContext);

	const { data, error } = useFetch<IUser>(`users/${state.login ? state.login : login}`);

	return (
		<>
			<NextSeo
				title={login && !error ? `👤 ${login}` : !error ? 'Loading...' : 'Erro!'}
				description="A short description goes here."
			/>

			<main>
				<UserComponent user={data} error={error} />
			</main>
		</>
	);
};

export default UserPage;
