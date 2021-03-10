/**
 * @type Auth
 */
export const authInitialState = {
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
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case 'LOGOUT': {
      localStorage.clear();
      return {
        ...state,
        user: undefined,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
