import { IS_MOUNTED } from "./commonTypes";

const INITIAL_STATE = {
  isMounted: false,
};

const commonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_MOUNTED:
      return {
        ...state,
        isMounted: action.isMounted,
      };
    default:
      return state;
  }
};

export default commonReducer;