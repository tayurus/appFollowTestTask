import { IFieldState } from "src/redux/field";

export const getPrevGeneration = (state: IFieldState, action) => {
  const previousFields = state.previousFields.slice();
  const prevField = previousFields.pop();
  return {
    ...state,
    field: prevField,
    previousFields: previousFields,
  };
};
