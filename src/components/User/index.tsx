import Loader from '@components/Loader';
import Image from 'next/image';

import { motion } from 'framer-motion';
import styles from './index.module.scss';

import { FiAtSign } from 'react-icons/fi';

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
				<Image
					className={styles.avatar}
					src={user.avatar_url}
					loading="lazy"
					objectFit="cover"
					alt={user.name}
					width="100%"
					height="100%"
				/>
				<div className={styles.content}>
					<span className={styles.account}>
						<span className={styles.name}>
							{user.name}
						</span>
						<span className={styles.login}>
							<FiAtSign />
							{user.login}
						</span>
					</span>
					<p className={styles.bio}>{user.bio}</p>
				</div>
			</motion.span>
		</article>
	);
}
