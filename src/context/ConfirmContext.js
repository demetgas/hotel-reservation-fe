import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
};

export const ConfrimContext = createContext(INITIAL_STATE);

const ConfrimReducer = (state, action) => {
  switch (action.type) {
    case "NEW_REQ":
      return action.payload;
    case "RESET_REQ":
      return INITIAL_STATE;
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
