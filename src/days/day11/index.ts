/* eslint-disable no-await-in-loop */
const DRAW_INTERVAL = 5000;

const EMPTY = "L";
const OCCUPIED = "#";
const DEBUG = false;
if (DEBUG) console.log("DEBUG ENABLED");

interface Data {
  data: string;
  amount?: number;
}

interface Frame {
  frame: Data[][];
  changed: boolean;
  occupied: number;
}
interface Position {
  x: number;
  y: number;
}

interface countOccupiedAdjacentSeatsOptions {
  input: Data[][];
  position: Position;
}

export const countOccupiedAdjacentSeats = ({
  input,
  position,
}: countOccupiedAdjacentSeatsOptions) => {
  let adjacentOccupiedCount = 0;
  const adjacentPositions: Position[] = [
    { x: position.x - 1, y: position.y - 1 },
    { x: position.x, y: position.y - 1 },
    { x: position.x + 1, y: position.y - 1 },

    { x: position.x - 1, y: position.y },
    { x: position.x + 1, y: position.y },

    { x: position.x - 1, y: position.y + 1 },
    { x: position.x, y: position.y + 1 },
    { x: position.x + 1, y: position.y + 1 },
  ];

  adjacentPositions.forEach((pos) => {
    // console.log("pos", pos);
    if (
      pos.x < 0 ||
      pos.x >= input[0].length ||
      pos.y < 0 ||
      pos.y >= input[0].length
    ) {
      return;
    }

    // console.log("ok position; checking", pos);
    if (input[pos.y][pos.x].data === OCCUPIED) {
      // console.log("OCCUPIED", input[pos.y][pos.x].data);
      adjacentOccupiedCount += 1;
    } else {
      // console.log("NOT OCCUPIED", input[pos.y][pos.x].data);
    }
  });

  return adjacentOccupiedCount;
};

const drawFrame = (input: Data[][]): Frame => {
  const frame: Data[][] = [...input];
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
      if (character.data === ".") return;
      if (
        character.data === EMPTY &&
        countOccupiedAdjacentSeats({ input, position: { x, y } }) === 0
      ) {
        // ... and NO occupied seats adjacent to it?
        frame[x][y].data = OCCUPIED;
        changed = true;
      }
      /*
      if (
        character.data === OCCUPIED &&
        countOccupiedAdjacentSeats({ input, position: { x, y } }) >= 4
      ) {
        // ... and four or more occupied seats adjacent to it?
        frame[x][y].data = EMPTY;
        changed = true;
      }
      */

      frame[x][y].amount = countOccupiedAdjacentSeats({
        input,
        position: { x, y },
      });

      if (frame[x][y].data === OCCUPIED) {
        occupied += 1;
      }
    });
  });

  return { frame, changed, occupied };
};

export const render = async (input: Data[][]): Promise<Frame> =>
  new Promise((resolve) => {
    const wait = setTimeout(() => {
      clearTimeout(wait);

      const nextFrame = drawFrame(input);
      resolve(nextFrame);
    }, DRAW_INTERVAL);
  });

export const parseInput = (input: string) =>
  input
    .split("\n")
    .map((line) => line.split("").map((item) => ({ data: item })));

export default async (input: string) => {
  let frame: Data[][] = parseInput(input);
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
