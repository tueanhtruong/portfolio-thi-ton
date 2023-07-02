export const initialState = {
  isSticky: false,
  isSidebarSticky: true,
  isAuthenticated: false,
  user: null,
};

export function reducer(state, { type, auth, user }) {
  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        isAuthenticated: auth,
        user,
      };
    case "SET_STICKY":
      return {
        ...state,
        isSticky: true,
      };
    case "REMOVE_STICKY":
      return {
        ...state,
        isSticky: false,
      };
    case "SET_SIDEBAR_STICKY":
      return {
        ...state,
        isSidebarSticky: true,
      };
    case "REMOVE_SIDEBAR_STICKY":
      return {
        ...state,
        isSidebarSticky: false,
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
