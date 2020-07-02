import React, { ReactNode } from "react";
import { withNaming } from "@bem-react/classname";
import {
  getNextGeneration,
  getPrevGeneration,
  toggleCellAliveStatus,
  initializeField,
  resizeField,
} from "src/redux/field";
import { connect } from "react-redux";
import "./Main.scss";
import { preset1, preset2, preset3 } from "src/helpers";
import { IState, IProps } from "./interface";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("main-page");

class Main extends React.Component<IProps, IState> {
  state = {
    generationDescriptor: null,
  };
  x;
  handlePlayClick = (): void => {
    this.setState({ generationDescriptor: setInterval(this.updateGeneration, 1000) });
  };

  handlePauseClick = (): void => {
    clearInterval(this.state.generationDescriptor);
    this.setState({ generationDescriptor: null });
  };

  updateGeneration = (): void => {
    const { field, getNextGeneration } = this.props;
    getNextGeneration(field);
  };

  renderControls = (): ReactNode => {
    const {
      getPrevGeneration,
      getNextGeneration,
      initializeField,
      field,
      previousFields,
    } = this.props;
    const { generationDescriptor } = this.state;
    return (
      <>
        <button
          className={b("btn", {
            pause: Boolean(generationDescriptor),
            play: !Boolean(generationDescriptor),
          })}
          onClick={generationDescriptor ? this.handlePauseClick : this.handlePlayClick}
        >
          {generationDescriptor ? "pause" : "play"}
        </button>

        <div className={b("title")}>generations</div>
        <div className={b("row")}>
          <button
            className={b("btn")}
            onClick={previousFields.length > 0 ? getPrevGeneration : null}
          >
            <span className={b("btn-label", { prev: true })}>prev</span>
          </button>
          <button className={b("btn")} onClick={() => getNextGeneration(field)}>
            <span className={b("btn-label", { next: true })}>next</span>
          </button>
        </div>

        <div className={b("title")}>presets</div>
        <div className={b("row")}>
          <button className={b("btn")} onClick={() => initializeField(preset1)}>
            preset 1
          </button>
          <button className={b("btn")} onClick={() => initializeField(preset2)}>
            preset 2
          </button>
          <button className={b("btn")} onClick={() => initializeField(preset3)}>
            preset 3
          </button>
        </div>
      </>
    );
  };

  renderField = (): ReactNode => {
    const { field, toggleCellAliveStatus, resizeField } = this.props;
    const rowsCount = field.length;
    const colsCount = field[0].length;
    return (
      <div className={b("field-wrapper")}>
        <div className={b("field-controls")}>
          <button className={b("btn")} onClick={() => resizeField(field, rowsCount, colsCount - 1)}>
            remove column
          </button>
          <button className={b("btn")} onClick={() => resizeField(field, rowsCount, colsCount + 1)}>
            add column
          </button>
        </div>

        <div className={b("field-controls")}>
          <button className={b("btn")} onClick={() => resizeField(field, rowsCount - 1, colsCount)}>
            remove row
          </button>
          <button className={b("btn")} onClick={() => resizeField(field, rowsCount + 1, colsCount)}>
            add row
          </button>
        </div>

        <div className={b("field")} style={{ gridTemplateColumns: `repeat(${colsCount}, 18px)` }}>
          {field.map((row: boolean[], rowIndex: number) =>
            row.map((cellInfo: boolean, colIndex: number) => (
              <div
                onClick={() => toggleCellAliveStatus(rowIndex, colIndex)}
                key={colIndex}
                className={b("cell", { alive: cellInfo })}
              />
            ))
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={b()}>
        {this.renderControls()}
        {this.renderField()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { field, previousFields } = state.fieldReducer;
  return { field, previousFields };
};

const mapDispatchToProps = (dispatch) => ({
  getNextGeneration: (field: boolean[][]) => dispatch(getNextGeneration(field)),
  getPrevGeneration: () => dispatch(getPrevGeneration()),
  toggleCellAliveStatus: (cellRow: number, cellCol: number) =>
    dispatch(toggleCellAliveStatus(cellRow, cellCol)),
  initializeField: (initialField: boolean[][]) => dispatch(initializeField(initialField)),
  resizeField: (oldField: boolean[][], newRowCount: number, newColsCount: number) => {
    if (newRowCount < 5 || newColsCount < 5) {
      alert("Field can not be less than 5x5");
    } else {
      dispatch(resizeField(oldField, newRowCount, newColsCount));
    }
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Main);

export { connectedComponent as Main };
