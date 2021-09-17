import { useRef } from 'react';
import Loader from '@components/Loader';
import Image from 'next/image';

import { motion } from 'framer-motion';
import styles from './index.module.scss';

import { FiGithub } from 'react-icons/fi';

export default function UserComponent({ user, error }): JSX.Element {
	const constraintsRef = useRef(null);

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

	if (error) return (
		<article className={styles.container}>
			<h1 className={styles.error_message}>Houve um erro!</h1>
		</article>
	);

	if (!user) return (
		<article className={styles.container}>
			<Loader />
		</article>
	);

	return (
		<motion.article className={styles.container} ref={constraintsRef}>
			<motion.section
				initial="hidden"
				animate="visible"
				className={styles.user}
				variants={cardEffects}
				whileHover={hoverEffects}
				drag
				dragConstraints={constraintsRef}
				dragElastic={0.2}
			>
				<picture className={styles.avatar}>
					<Image
						id="image"
						src={user.avatar_url}
						loading="lazy"
						layout="fill"
						objectFit="cover"
						alt={user.name}
					/>
				</picture>
				<div className={styles.content}>
					<header className={styles.account}>
						{
							user.name && (
								<h1 className={styles.name}>
									{user.name}
								</h1>
							)
						}
						<div className={styles.link}>
							<a className={styles.login} href={user.html_url} target="_blank" rel="noopener noreferrer">
								<FiGithub />
								{user.login}
							</a>
						</div>
					</header>
					{
						user.bio && <p className={styles.bio}>{user.bio}</p>
					}
				</div>
			</motion.section>
		</motion.article>
	);
}
