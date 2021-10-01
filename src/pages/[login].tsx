import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

// --- Hooks ---
import { useFetch } from '@hooks/useFetch';

// --- Components ---
import UserComponent from '@components/User';

const UserPage: NextPage = () => {
	const { query } = useRouter();
	const { login } = query;

	const { data, error } = useFetch<IUser>(`users/${login}`);

	return (
		<>
			<DefaultSeo
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
