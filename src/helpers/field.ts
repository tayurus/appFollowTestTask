// определяет кол-во "живых" соседей у клетки в поле field с координатами cellRow, cellCol
export const getAliveNeighborsCount = (
  field: boolean[][],
  cellRow: number,
  cellCol: number
): number => {
  let aliveNeighborsCount = 0,
    wasNegativeRowOverflow = false,
    wasNegativeColOverflow = false,
    wasRowOverflow = false;
  // идем по верхней, текущей и нижней строкам относительно исследуемой клетки
  for (let row = cellRow - 1; row <= cellRow + 1; row++) {
    if (row === -1) {
      row = field.length - 1;
      wasNegativeRowOverflow = true;
    }

    // если индекс текущей строки >= 0 и <= общего кол-ва строк в поле
    if (row >= 0 && row <= field.length) {
      if (row === field.length) {
        row = 0;
        wasRowOverflow = true;
      }

      // идем по левому, текущему и правому столбцам относительно исследуемой клетки
      for (let col = cellCol - 1; col <= cellCol + 1; col++) {
        if (col === -1) {
          wasNegativeColOverflow = true;
          col = field[0].length - 1;
        }
        // если индекс текущего столбца >= 0 и <= кол-ва элементов в текущей строке и это не текущая клетка
        if (col >= 0 && col <= field[row].length && !(row === cellRow && col === cellCol)) {
          if (col === field[row].length) {
            // особый случай - переходим от последнего столбца к первому
            aliveNeighborsCount = field[row][0] ? aliveNeighborsCount + 1 : aliveNeighborsCount;
          } else {
            // увеличивем кол-во "живых" соседей, если данная клетка живая
            aliveNeighborsCount = field[row][col] ? aliveNeighborsCount + 1 : aliveNeighborsCount;
          }
        }
        if (wasNegativeColOverflow) {
          wasNegativeColOverflow = false;
          col = -1;
        }
      }
    }
    if (wasNegativeRowOverflow) {
      wasNegativeRowOverflow = false;
      row = -1;
    }

    if (wasRowOverflow) {
      row = field.length;
    }
  }

  return aliveNeighborsCount;
};

export const getNextGeneration = (field: boolean[][]): boolean[][] => {
  // создаем новое поле на основе переданного в функцию
  const nextGenerationField = JSON.parse(JSON.stringify(field));

  // идем по всем строкам поля
  for (let row = 0; row < field.length; row++) {
    // идем по всем клеткам данной строки
    for (let col = 0; col < field[row].length; col++) {
      // определяем кол-во "живых соседей данной клетки"
      const aliveNeighborsCount = getAliveNeighborsCount(field, row, col);
      // если клетка "мертвая", а кол-во "живых" соседей рядом с ней === 3
      if (!field[row][col] && aliveNeighborsCount === 3) {
        // "оживляем данную клетку"
        nextGenerationField[row][col] = true;
      }
      // иначе если клетка "живая" и кол-во "живых" соседей рядом !== 2 или 3
      else if (field[row][col] && aliveNeighborsCount !== 2 && aliveNeighborsCount !== 3) {
        // "умертвляем клетку"
        nextGenerationField[row][col] = false;
      }
    }
  }

  // возвращаем новое поле
  return nextGenerationField;
};
// prettier-ignore
export const preset1 = [
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, true, true, false, true, false, false, false, false, false, false, false, false, false],
  [false, true, false, false, true, true, false, false, false, false, false, false, false, false, false],
  [false, false, true, true, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];

// prettier-ignore
export const preset2 = [
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, true, true, false, false, true, true, true, true, false, false],
  [false, false, false, false, false, false, true, false, false, true, false, false, false, false, false],
  [false, false, false, false, false, false, true, true, true, true, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];

// prettier-ignore
export const preset3 = [
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false],
  [false, false, false, false, true, false, false, false, false, false, true, false, false, false, false],
  [false, false, false, false, false, true, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, false, false, true, false, true, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, true, false, true, false, false, false, false, false, false],
  [false, false, false, false, false, true, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, true, false, false, false, false, false, true, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];

export const resizeField = (
  rowsCount: number,
  colsCount: number,
  field: boolean[][]
): boolean[][] => {
  let newField = field.slice();

  if (rowsCount < field.length) {
    newField = newField.slice(0, rowsCount);
  } else if (rowsCount > field.length) {
    newField.push(new Array(field[0].length).fill(false));
  }

  if (colsCount < field[0].length) {
    newField = newField.map((row: boolean[]) => row.slice(0, row.length - 1));
  } else if (colsCount > field[0].length) {
    newField = newField.map((row: boolean[]) => [...row, false]);
  }

  return newField;
};
