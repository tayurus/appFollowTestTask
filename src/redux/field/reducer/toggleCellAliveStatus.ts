import { IFieldState } from "src/redux/field";

interface IAction {
  type: string;
  cellRow: number;
  cellCol: number;
}

export const toggleCellAliveStatus = (state: IFieldState, action: IAction) => {
  const { cellRow, cellCol } = action;
  const field = state.field.slice();
  field[cellRow][cellCol] = !field[cellRow][cellCol];
  return {
    ...state,
    field,
  };
};
