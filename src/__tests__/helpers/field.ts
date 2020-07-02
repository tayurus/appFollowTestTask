import { getAliveNeighborsCount, getNextGeneration } from "src/helpers";

// prettier-ignore
export const preset1:boolean[][] = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, true, false, true, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, true, false, true, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];

// prettier-ignore
export const preset2:boolean[][] = [
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, true, true, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, true, false, true, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];

it("getAliveNeighborsCount: no alive neighbors", () => {
  expect(getAliveNeighborsCount(preset1, 0, 0)).toEqual(0);
});

it("getAliveNeighborsCount: 1 neighbor", () => {
  expect(getAliveNeighborsCount(preset1, 3, 3)).toEqual(1);
});

it("getAliveNeighborsCount: 3 neighbors", () => {
  expect(getAliveNeighborsCount(preset1, 6, 6)).toEqual(3);
});

it("getNextGeneration: first case", () => {
  expect(getNextGeneration(preset1)).toEqual(preset2);
});
