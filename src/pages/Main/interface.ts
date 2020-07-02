export interface IState {
  generationDescriptor: null | any;
}

export interface IProps {
  field: boolean[][];
  previousFields: boolean[][][];
  getNextGeneration(field: boolean[][]): Promise<void>;
  getPrevGeneration(): Promise<void>;
  toggleCellAliveStatus(cellRow: number, cellCol: number): Promise<void>;
  initializeField(initialField: boolean[][]): Promise<void>;
  resizeField(oldField: boolean[][], newRowCount: number, newColsCount: number): Promise<void>;
}
