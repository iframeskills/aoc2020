interface Position {
  x: number;
  y: number;
}

const travel = (position: Position, vector: Position): Position => {
  const newPosition: Position = {
    x: position.x + vector.x,
    y: position.y + vector.y,
  };

  return newPosition;
};

const hasTree = (map: string[][], position: Position): boolean => {
  // map "repeats" on X axis; if we take modulus of width of the map, we can stick to the "original" map
  const normalisedPosition: Position = {
    x: position.x % map[0].length,
    y: position.y,
  };

  const TREE = "#";
  return map[normalisedPosition.y][normalisedPosition.x] === TREE;
};

const getTreeCount = (map: string[][], vector: Position): number => {
  let treeCount: number = 0;

  let position: Position = {
    x: 0,
    y: 0,
  };

  do {
    position = travel(position, vector);
    if (hasTree(map, position)) {
      treeCount += 1;
    }
  } while (position.y < map.length - 1);

  return treeCount;
};

export default (input: string) => {
  const rows: string[] = input.split("\n");

  const vector: Position = {
    x: 3,
    y: 1,
  };
  const map: string[][] = rows.map((row) => row.split(""));

  const resultpart1 = getTreeCount(map, vector);

  const vectors: Position[] = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];

  const resultpart2 = vectors
    .map((mappedVector) => getTreeCount(map, mappedVector))
    .reduce((previousValue, currentValue) => previousValue * currentValue);

  return { resultpart1, resultpart2 };
};
