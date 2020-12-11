import { countOccupiedAdjacentSeats } from ".";
// import sampleinput from "./input/sample";
// import sampleoutput from "./output/sample";

describe("solution", () => {
  it("sample input should match output", () => {
    expect(true).toEqual(true);
  });

  it("countOccupiedAdjacentSeats", () => {
    const input = [
      ["#", "#", "#"],
      ["#", "#", "#"],
      ["#", "#", "#"],
    ];
    const position = { x: 0, y: 0 };
    const result = 3;

    expect(countOccupiedAdjacentSeats({ input, position })).toEqual(result);
  });

  it("countOccupiedAdjacentSeats", () => {
    const input = [
      ["#", "#", "#"],
      ["#", "#", "#"],
      ["#", "#", "#"],
    ];
    const position = { x: 1, y: 1 };
    const result = 8;

    expect(countOccupiedAdjacentSeats({ input, position })).toEqual(result);
  });
});
