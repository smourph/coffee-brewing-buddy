/**
 * @type Auth
 */
export const authInitialState = {
  token: JSON.parse(localStorage.getItem('token')) || undefined,
  user: JSON.parse(localStorage.getItem('user')) || undefined,
};

/**
 * @param {Auth} state
 * @param {{type:string, payload:Object}} action
 * @return {Auth}
 */
export const authReducer = (state = authInitialState, action = { type: '', payload: {} }) => {
  switch (action.type) {
    case 'LOGIN': {
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    }
    case 'LOGOUT': {
      localStorage.clear();
      return {
        ...state,
        token: undefined,
        user: undefined,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
