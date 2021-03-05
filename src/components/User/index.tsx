import Loader from '@components/Loader';

import styles from './index.module.scss';

import { FiAlertCircle } from 'react-icons/fi';

export default function UserComponent({ user }): JSX.Element {
	if (!user) {
		return (
			<article className={styles.container}>
				<Loader />
			</article>
		);
	}

	return (
		<article className={styles.container}>
			<span className={styles.user}>
				<img
					className={styles.avatar}
					src={user.avatar_url}
					loading="lazy"
					alt={user.name}
				/>
				<span>
					<h1 className={styles.name}>{user.name}</h1>
					<h4 className={styles.login}>
						<FiAlertCircle />
						{user.login}
					</h4>
					<p className={styles.bio}>{user.bio}</p>
				</span>
			</span>
		</article>
	);
}
