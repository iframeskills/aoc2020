import day, {
  countCharacters,
  mergeCharacters,
  mergeOnlyCommonCharacters,
} from ".";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

import exerciseinput from "./input/exercise";
import part1output from "./output/part1";
import part2output from "./output/part2";

describe("solution", () => {
  it("countCharacters", () => {
    expect(countCharacters("c")).toEqual(1);
    expect(countCharacters("abc")).toEqual(3);
    expect(countCharacters("abcdhiro")).toEqual(8);
  });

  it("mergeCharacters", () => {
    expect(mergeCharacters(["abcx", "abcy", "abcz"])).toEqual("abcxyz");
    expect(mergeCharacters(["abc", "def", "ghy"])).toEqual("abcdefghy");
    expect(mergeCharacters(["abc", "abc", "abc"])).toEqual("abc");
  });

  it("mergeOnlyCommonCharacters", () => {
    expect(mergeOnlyCommonCharacters(["a", "a", "a"])).toEqual("a");
    expect(mergeOnlyCommonCharacters(["abcx", "abcy", "abcz"])).toEqual("abc");
    expect(mergeOnlyCommonCharacters(["abc", "def", "ghy"])).toEqual("");
    expect(mergeOnlyCommonCharacters(["abc", "abc", "abc"])).toEqual("abc");
  });

  it("sample input should match output", () => {
    expect(day(sampleinput).resultpart1).toEqual(sampleoutput);
  });

  it("PART 1 - sample input should match output", () => {
    expect(day(exerciseinput).resultpart1).toEqual(part1output);
  });

  it("PART 2 - sample input should match output", () => {
    expect(day(exerciseinput).resultpart2).toEqual(part2output);
  });
});
