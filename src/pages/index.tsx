import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { useState } from 'react';

// --- Components ---
import SearchComponent from '@components/Search';

const HomePage: NextPage = () => {
	const [login, setLogin] = useState('');

	const router = useRouter();

	const handleChangeLogin = ({ currentTarget }) => setLogin(currentTarget.value);

	const handleSearchLogin = (event: Event) => {
		event.preventDefault();
		if (login) router.push(`/${login.trim()}`);
	};

	return (
		<>
			<DefaultSeo
				title="🔍 Search GitHub Profile..."
				description="A short description goes here."
			/>

			<main>
				<SearchComponent
					login={login}
					handleChangeLogin={handleChangeLogin}
					handleSearchLogin={handleSearchLogin}
					placeholder="Search GitHub Profile..."
				/>
			</main>
		</>
	);
};

export default HomePage;
