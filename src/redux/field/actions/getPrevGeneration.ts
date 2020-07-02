import { fieldConstants } from "./../field.constants";

export const getPrevGeneration = () => {
  return (dispatch: Function) => {
    dispatch({ type: fieldConstants.GET_PREV_GENERATION });
  };
};
