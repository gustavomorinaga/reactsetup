// --- Styles ---
import { FiGithub, FiSearch } from 'react-icons/fi';
import styles from './index.module.scss';

export default function SearchComponent({
	login,
	handleChangeLogin,
	handleSearchLogin,
	placeholder,
}): JSX.Element {
	return (
		<div className={styles.container}>
			<form className={styles.search}>
				<label>
					<FiGithub className={styles.label_icon} />
					<input
						type="text"
						name="login"
						id="login"
						value={login}
						placeholder={placeholder}
						onChange={handleChangeLogin}
					/>
				</label>
				<button onClick={handleSearchLogin} aria-label="Search">
					<FiSearch />
				</button>
			</form>
		</div>
	);
}
