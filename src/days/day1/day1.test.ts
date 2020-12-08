import day1, { SumsTo2020, multiply } from "./day1";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

import exerciseinput from "./input/exercise";
import part1output from "./output/part1";
import part2output from "./output/part2";

describe("solution", () => {
  it("multiply should multiply", () => {
    expect(multiply(2, 2)).toEqual(4);
    expect(multiply(5, 1)).toEqual(5);
  });
  it("sumsto2020 should only return true for 1721 and 299", () => {
    expect(SumsTo2020(1721, 299)).toEqual(true);
    expect(SumsTo2020(1, 1)).toEqual(false);
  });
  it("PART 1 - sample input should match output", () => {
    expect(day1(sampleinput).resultpart1).toEqual(sampleoutput);
  });
  it("PART 1 - exercise input should match output", () => {
    expect(day1(exerciseinput).resultpart1).toEqual(part1output);
  });
  it("PART 2 - exercise input should match output", () => {
    expect(day1(exerciseinput).resultpart2).toEqual(part2output);
  });
});
