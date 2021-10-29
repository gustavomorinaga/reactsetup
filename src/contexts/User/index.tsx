import { createContext, Dispatch, SetStateAction, useState } from 'react';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

type PropsUserContext = {
	state: IUser;
	setState: Dispatch<SetStateAction<IUser>>;
};

const DEFAULT_VALUE = {
	state: {
		avatar_url: '',
		bio: '',
		followers: 0,
		following: 0,
		html_url: '',
		location: '',
		login: '',
		name: '',
		public_repos: 0,
		url: '',
	},
	setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC = ({ children }) => {
	const [state, setState] = useState(DEFAULT_VALUE.state);

	return (
		<UserContext.Provider value={{ state, setState }}>{children}</UserContext.Provider>
	);
};

export { UserContextProvider };
export default UserContext;
