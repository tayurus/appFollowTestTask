import { fieldConstants } from "./../field.constants";

export const initializeField = (initialField: boolean[][]) => {
  return (dispatch: Function) => {
    dispatch({ type: fieldConstants.INITIALIZE_FIELD, initialField });
  };
};
