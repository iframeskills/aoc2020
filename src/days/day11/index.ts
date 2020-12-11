/* eslint-disable no-await-in-loop */
const DRAW_INTERVAL = 1000;

const EMPTY = "L";
const OCCUPIED = "#";
const DEBUG = false;
if (DEBUG) console.log("DEBUG ENABLED");

interface Frame {
  frame: string[][];
  changed: boolean;
  occupied: number;
}
interface Position {
  x: number;
  y: number;
}

interface countOccupiedAdjacentSeatsOptions {
  input: string[][];
  position: Position;
}

export const countOccupiedAdjacentSeats = ({
  input,
  position,
}: countOccupiedAdjacentSeatsOptions) => {
  let adjacentOccupiedCount = 0;
  const adjacentPositions: Position[] = [
    { x: position.x - 1, y: position.y - 1 },
    { x: position.x - 1, y: position.y },
    { x: position.x - 1, y: position.y + 1 },

    { x: position.x - 1, y: position.y },
    { x: position.x + 1, y: position.y },

    { x: position.x - 1, y: position.y + 1 },
    { x: position.x, y: position.y + 1 },
    { x: position.x + 1, y: position.y + 1 },
  ];

  adjacentPositions.forEach((pos) => {
    if (
      pos.x < 0 ||
      pos.x >= input[0].length ||
      pos.y < 0 ||
      pos.y >= input[1].length
    ) {
      return;
    }

    if (input[pos.x][pos.y] === OCCUPIED) {
      adjacentOccupiedCount += 1;
    }
  });

  return adjacentOccupiedCount;
};

const drawFrame = (input: string[][]): Frame => {
  const frame: string[][] = [...input];
  let changed: boolean = false;
  let occupied: number = 0;
  /*
  If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
  If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
  Otherwise, the seat's state does not change.
  Floor (.) never changes; seats don't move, and nobody sits on the floor.
 */
  input.forEach((line, x) => {
    line.forEach((character, y) => {
      if (
        character === EMPTY &&
        countOccupiedAdjacentSeats({ input, position: { x, y } }) === 0
      ) {
        // ... and NO occupied seats adjacent to it?
        frame[x][y] = OCCUPIED;
        changed = true;
        occupied += 1;
      }
      if (
        character === OCCUPIED &&
        countOccupiedAdjacentSeats({ input, position: { x, y } }) >= 4
      ) {
        // ... and four or more occupied seats adjacent to it?

        frame[x][y] = EMPTY;
        changed = true;
      }
    });
  });

  return { frame, changed, occupied };
};

const render = async (input: string[][]): Promise<Frame> =>
  new Promise((resolve) => {
    const wait = setTimeout(() => {
      clearTimeout(wait);

      const nextFrame = drawFrame(input);
      resolve(nextFrame);
    }, DRAW_INTERVAL);
  });

const parseInput = (input: string) =>
  input.split("\n").map((line) => line.split(""));

export default async (input: string) => {
  const map: string[][] = parseInput(input);
  let frame: string[][] = map;
  let changed = false;
  let occupied = 0;

  do {
    const result = await render(frame);
    frame = result.frame;
    console.log(frame);
    changed = result.changed;
    occupied = result.occupied;
  } while (DEBUG ? false : changed);

  console.log(`stable state reached with ${occupied} occupied`);

  const resultpart1 = "";

  const resultpart2 = "";

  return { resultpart1, resultpart2 };
};
