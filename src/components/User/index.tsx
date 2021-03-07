import Loader from '@components/Loader';

import { motion } from 'framer-motion';
import styles from './index.module.scss';

import { FiAlertCircle } from 'react-icons/fi';

export default function UserComponent({ user }): JSX.Element {
	const cardEffects: any = {
		hidden: {
			scale: 0.8,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.4,
			},
		},
	};

	const hoverEffects: any = {
		position: 'relative',
		zIndex: 1,
		scale: [1, 1.4, 1.2],
		transition: {
			duration: 0.2,
		},
	};

	if (!user) {
		return (
			<article className={styles.container}>
				<Loader />
			</article>
		);
	}

	return (
		<article className={styles.container}>
			<motion.span
				initial="hidden"
				animate="visible"
				className={styles.user}
				variants={cardEffects}
				whileHover={hoverEffects}
			>
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
			</motion.span>
		</article>
	);
}
