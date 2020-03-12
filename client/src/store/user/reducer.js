const initialState = {
  userId: null,
  token: null,
  newUser: null
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "USER_LOGGEDIN": {
      return {
        ...state,
        userId: action.payload.id,
        token: action.payload.token,
        newUser: null
      };
    }
    case "USER_SIGNEDUP": {
      return { ...state, newUser: true };
    }
    case "CLEAR_USER_DATA": {
      return { ...initialState };
    }
    default: {
      return { ...state };
    }
  }
}
