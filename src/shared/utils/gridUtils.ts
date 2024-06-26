export const coordinateToIndexConverter =
  (cells: BalloonCellInfo[]) =>
  ({ column, row }: Coordinates) =>
    cells.findIndex(
      ({ coordinates }) =>
        coordinates.column === column && coordinates.row === row
    );

const directions = {
  left: { column: -1, row: 0 },
  right: { column: 1, row: 0 },
  up: { column: 0, row: -1 },
  down: { column: 0, row: 1 },
} as const;

export const cellMover = (cells: BalloonCellInfo[]) => {
  const convertCoordinatesToIndex = coordinateToIndexConverter(cells);

  return ({ column, row }: Coordinates, direction: keyof typeof directions) =>
    convertCoordinatesToIndex({
      column: column + directions[direction].column,
      row: row + directions[direction].row,
    });
};

export const sizeChecker =
  ({ minSize, maxSize }: { minSize: number; maxSize: number }) =>
  ({ columns, rows }: GridSize) =>
    columns >= minSize &&
    columns <= maxSize &&
    rows >= minSize &&
    rows <= maxSize;

export const indexToCoordinates = ({
  columnSize,
  index,
}: {
  index: number;
  columnSize: number;
}) => ({
  row: Math.floor(index / columnSize) + 1,
  column: (index % columnSize) + 1,
});
