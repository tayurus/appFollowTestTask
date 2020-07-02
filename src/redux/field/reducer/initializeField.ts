import { IFieldState } from "src/redux/field";

interface IAction {
  type: string;
  initialField: boolean[][];
}

export const initializeField = (state: IFieldState, action: IAction) => {
  return {
    ...state,
    field: action.initialField,
  };
};
