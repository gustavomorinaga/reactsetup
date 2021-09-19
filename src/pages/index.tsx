import SearchComponent from "@components/Search";
import { NextPage } from "next";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from "react";

const HomePage: NextPage = () => {
	const [login, setLogin] = useState('');

	const router = useRouter();

	const handleChangeLogin = ({ currentTarget }) => setLogin(currentTarget.value);

	const handleSearchLogin = () => {
		if (login) router.push(`/${login.trim()}`);
	}

	return (
		<>
			<Head>
				<title>🔍 Search GitHub Profile...</title>
			</Head>

			<main>
				<SearchComponent login={login} handleChangeLogin={handleChangeLogin} handleSearchLogin={handleSearchLogin} placeholder="Search GitHub Profile..." />
			</main>
		</>
	);
}

export default HomePage;
