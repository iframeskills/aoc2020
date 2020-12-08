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

export default (input: string) => {
  const rows: string[] = input.split("\n");

  const map: string[][] = rows.map((row) => row.split(""));
  let treeCount: number = 0;

  let position: Position = {
    x: 0,
    y: 0,
  };

  const vector: Position = {
    x: 3,
    y: 1,
  };

  do {
    position = travel(position, vector);
    if (hasTree(map, position)) {
      treeCount += 1;
    }
  } while (position.y < rows.length - 1);

  const resultpart1 = treeCount;

  let resultpart2;

  return { resultpart1, resultpart2 };
};
