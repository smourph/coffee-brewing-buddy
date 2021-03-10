import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import { authInitialState, authReducer } from '../store/reducer/authReducer';

/**
 * @typedef {Object} AuthContext
 * @property {Auth} state
 * @property {Function} dispatch
 *
 * @typedef {Object} Auth
 * @property {?User} user
 *
 * @typedef {Object} User
 * @property {string} name
 * @property {Object} avatar_url
 */

/**
 * @type {React.Context<AuthContext>}
 */
export const AuthContext = createContext(undefined);

/**
 * @return {AuthContext}
 */
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthContext');
  }

  return context;
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState, (initialArg) => initialArg);
  const value = { state, dispatch };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthContextProvider;
