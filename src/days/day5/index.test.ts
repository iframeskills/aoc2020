import day, {
  getRow,
  getColumn,
  getId,
  getMissingFromList,
  decodeTicket,
} from ".";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

import exerciseinput from "./input/exercise";
import part1output from "./output/part1";
import part2output from "./output/part2";

describe("solution", () => {
  it("getRow should return", () => {
    const input = "FBFBBFF";
    const result = 44;
    expect(getRow(input)).toEqual(result);
  });

  it("getColumn should return", () => {
    const input = "RLR";
    const result = 5;
    expect(getColumn(input)).toEqual(result);
  });

  it("getId should return", () => {
    expect(getId(44, 5)).toEqual(357);
  });

  it("decodeTicket should return", () => {
    const input = "FBFBBFFRLR";
    const result = { id: 357, row: 44, column: 5 };
    expect(decodeTicket(input)).toEqual(result);
  });

  it("getMissingFromList should return", () => {
    expect(getMissingFromList([1, 2, 3, 5, 6])).toEqual(4);
  });

  it("sample input should match output", () => {
    /*

      BFFFBBFRRR: row 70, column 7, seat ID 567.
      FFFBBBFRRR: row 14, column 7, seat ID 119.
      BBFFBBFRLL: row 102, column 4, seat ID 820.
      What is the highest seat ID on a boarding pass?
      -> 820
    */
    expect(day(sampleinput).resultpart1).toEqual(sampleoutput);
  });

  it("PART 1 - sample input should match output", () => {
    expect(day(exerciseinput).resultpart1).toEqual(part1output);
  });

  it("PART 2 - sample input should match output", () => {
    expect(day(exerciseinput).resultpart2).toEqual(part2output);
  });
});
