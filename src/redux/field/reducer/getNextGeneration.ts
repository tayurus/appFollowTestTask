import { IFieldState } from "src/redux/field";

interface IAction {
  type: string;
  nextGenerationField: boolean[][];
}

export const getNextGeneration = (state: IFieldState, action: IAction) => {
  return {
    ...state,
    field: action.nextGenerationField,
    previousFields: [...state.previousFields, state.field],
  };
};
