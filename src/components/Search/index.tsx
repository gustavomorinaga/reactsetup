import { FiGithub, FiSearch } from 'react-icons/fi';
import styles from './index.module.scss';

export default function SearchComponent({ login, handleChangeLogin, handleSearchLogin, placeholder }): JSX.Element {
	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<label htmlFor="login">
					<FiGithub className={styles.label_icon} />
					<input type="text" name="login" id="login" value={login} placeholder={placeholder} onChange={handleChangeLogin} />
				</label>
				<button onClick={handleSearchLogin}>
					<FiSearch />
				</button>
			</div>
		</div>
	);
}
