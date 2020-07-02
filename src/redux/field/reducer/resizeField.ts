import { IFieldState } from "src/redux/field";

interface IAction {
  type: string;
  newField: boolean[][];
}

export const resizeField = (state: IFieldState, action: IAction) => {
  const { newField } = action;
  return {
    ...state,
    field: newField,
    previousFields: [...state.previousFields, state.field],
  };
};
