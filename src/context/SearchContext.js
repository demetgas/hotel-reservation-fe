import { createContext } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_REQ":
      return action.playload;
    case "RESET_REQ":
      return INITIAL_STATE;
    default:
      return state;
  }
};
