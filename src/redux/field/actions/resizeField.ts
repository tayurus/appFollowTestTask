import { fieldConstants } from "./../field.constants";
import { resizeField as resizeFieldHelper } from "src/helpers";

export const resizeField = (oldField: boolean[][], newRowsCount: number, newColsCount: number) => {
  const newField: boolean[][] = resizeFieldHelper(newRowsCount, newColsCount, oldField);
  return (dispatch: Function) => {
    dispatch({ type: fieldConstants.RESIZE_FIELD, newField });
  };
};
