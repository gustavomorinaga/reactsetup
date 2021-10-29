// --- Providers ---
import { UserContextProvider } from './User';

const GlobalContext: React.FC = ({ children }) => (
	<>
		<UserContextProvider>{children}</UserContextProvider>
	</>
);

export default GlobalContext;
