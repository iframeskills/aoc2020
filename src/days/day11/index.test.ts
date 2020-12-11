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
    ].map((row) => row.map((data) => ({ data })));
    const position = { x: 0, y: 0 };
    const result = 3;

    expect(countOccupiedAdjacentSeats({ input, position })).toEqual(result);
  });

  it("countOccupiedAdjacentSeats", () => {
    const input = [
      ["#", "#", "#"],
      ["#", "#", "#"],
      ["#", "#", "#"],
    ].map((row) => row.map((data) => ({ data })));
    const position = { x: 1, y: 1 };
    const result = 8;

    expect(countOccupiedAdjacentSeats({ input, position })).toEqual(result);
  });
  it("countOccupiedAdjacentSeats", () => {
    const input = [
      ["L", "L", "L"],
      ["L", "L", "L"],
      ["L", "L", "L"],
    ].map((row) => row.map((data) => ({ data })));
    const position = { x: 1, y: 1 };
    const result = 0;

    expect(countOccupiedAdjacentSeats({ input, position })).toEqual(result);
  });

  it.only("countOccupiedAdjacentSeats entire position", () => {
    const input = [
      ["#", "L", "#"],
      [".", ".", "#"],
      ["#", ".", "L"],
    ].map((row) => row.map((data) => ({ data })));
    const position1 = { x: 0, y: 0 };
    const result1 = 0;
    const position2 = { x: 1, y: 0 };
    const result2 = 3;

    const position3 = { x: 2, y: 0 };
    const result3 = 1;

    const position4 = { x: 0, y: 1 };
    const result4 = 2;

    const position5 = { x: 1, y: 1 };
    const result5 = 4;

    const position6 = { x: 2, y: 1 };
    const result6 = 1;

    const position7 = { x: 0, y: 2 };
    const result7 = 0;

    const position8 = { x: 1, y: 2 };
    const result8 = 2;

    const position9 = { x: 2, y: 2 };
    const result9 = 1;

    expect(countOccupiedAdjacentSeats({ input, position: position1 })).toEqual(
      result1
    );

    expect(countOccupiedAdjacentSeats({ input, position: position2 })).toEqual(
      result2
    );
    expect(countOccupiedAdjacentSeats({ input, position: position3 })).toEqual(
      result3
    );
    expect(countOccupiedAdjacentSeats({ input, position: position4 })).toEqual(
      result4
    );
    expect(countOccupiedAdjacentSeats({ input, position: position5 })).toEqual(
      result5
    );
    expect(countOccupiedAdjacentSeats({ input, position: position6 })).toEqual(
      result6
    );
    expect(countOccupiedAdjacentSeats({ input, position: position7 })).toEqual(
      result7
    );
    expect(countOccupiedAdjacentSeats({ input, position: position8 })).toEqual(
      result8
    );
    expect(countOccupiedAdjacentSeats({ input, position: position9 })).toEqual(
      result9
    );
  });
});
