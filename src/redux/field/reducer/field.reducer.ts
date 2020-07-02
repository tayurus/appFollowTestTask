import { createReducer } from "src/helpers";
import { fieldConstants } from "./../field.constants";
import { getNextGeneration } from "./getNextGeneration";
import { getPrevGeneration } from "./getPrevGeneration";
import { toggleCellAliveStatus } from "./toggleCellAliveStatus";
import { initializeField } from "./initializeField";
import { resizeField } from "./resizeField";

const DEFAULT_ROWS_COUNT = 15;
const DEFAULT_COLS_COUNT = 15;

export interface IFieldState {
  field: boolean[][];
  previousFields: boolean[][][];
}

const initialState: IFieldState = {
  field: new Array(DEFAULT_ROWS_COUNT)
    .fill(false)
    .map(() => new Array(DEFAULT_COLS_COUNT).fill(false)),
  previousFields: [],
};

export const fieldReducer = createReducer(initialState, {
  [fieldConstants.GET_NEXT_GENERATION]: getNextGeneration,
  [fieldConstants.GET_PREV_GENERATION]: getPrevGeneration,
  [fieldConstants.TOGGLE_CELL_ALIVE_STATUS]: toggleCellAliveStatus,
  [fieldConstants.INITIALIZE_FIELD]: initializeField,
  [fieldConstants.RESIZE_FIELD]: resizeField,
});
