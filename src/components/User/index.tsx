import { useFetch } from '@hooks/useFetch';
import { User } from '@models/user';

import styles from './index.module.scss';

import { FiAlertCircle } from 'react-icons/fi';

const UserComponent: React.FC = () => {
	const { data } = useFetch<User>('users/gmatthewsfeuer');

	if (!data) {
		return <p>Carregando...</p>;
	}

	return (
		<article className={styles.container}>
			<span className={styles.user}>
				<img className={styles.avatar} src={data.avatar_url} alt={data.name} />
				<span>
					<h1 className={styles.name}>{data.name}</h1>
					<h4 className={styles.login}>
						<FiAlertCircle />
						{data.login}
					</h4>
					<p className={styles.bio}>{data.bio}</p>
				</span>
			</span>
		</article>
	);
};

export default UserComponent;
