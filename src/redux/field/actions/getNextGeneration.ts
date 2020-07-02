import { fieldConstants } from "./../field.constants";
import { getNextGeneration as getNextGenerationHelper } from "src/helpers";

export const getNextGeneration = (field: boolean[][]) => {
  return (dispatch: Function) => {
    const nextGenerationField = getNextGenerationHelper(field);
    dispatch({ type: fieldConstants.GET_NEXT_GENERATION, nextGenerationField });
  };
};
