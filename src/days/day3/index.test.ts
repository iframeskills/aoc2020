import day3 from ".";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

import exerciseinput from "./input/exercise";
import part1output from "./output/part1";
// import part2output from "./output/part2";

describe("solution", () => {
  it("sample input should match output", () => {
    expect(day3(sampleinput).resultpart1).toEqual(sampleoutput);
  });

  it("PART 1 - sample input should match output", () => {
    expect(day3(exerciseinput).resultpart1).toEqual(part1output);
  });
});
