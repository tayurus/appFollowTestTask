import { fieldConstants } from "./../field.constants";

export const toggleCellAliveStatus = (cellRow: number, cellCol: number) => {
  return (dispatch: Function) => {
    dispatch({ type: fieldConstants.TOGGLE_CELL_ALIVE_STATUS, cellRow, cellCol });
  };
};
