import day from ".";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

describe("solution", () => {
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
  /*
  it("PART 1 - sample input should match output", () => {
    expect(day(sampleinput).resultpart1).toEqual(sampleoutput);
  });
  */
});
