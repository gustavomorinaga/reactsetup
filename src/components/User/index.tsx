import { useFetch } from '@hooks/useFetch';
import { User } from '@models/user';

import styles from './index.module.scss';

export const UserComponent: React.FC = () => {
	const { data } = useFetch<User>('http://api.github.com/users/gmatthewsfeuer');

	if (!data) {
		return <p>Carregando...</p>;
	}

	return (
		<article className={styles.container}>
			<span className={styles.user}>
				<img className={styles.avatar} src={data.avatar_url} alt={data.name} />
				<span>
					<h1 className={styles.name}>{data.name}</h1>
					<h4 className={styles.login}>{data.login}</h4>
					<p className={styles.bio}>{data.bio}</p>
				</span>
			</span>
		</article>
	);
};
