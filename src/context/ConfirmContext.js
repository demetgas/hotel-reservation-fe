import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
};

export const ConfrimContext = createContext(INITIAL_STATE);

const ConfrimReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_BEGIN":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_DONE":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAIL":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "QUIT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const ConfrimContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ConfrimReducer, INITIAL_STATE);

  return (
    <ConfrimContext.Provider
      value={{
        city: state.city,
        date: state.date,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </ConfrimContext.Provider>
  );
};
