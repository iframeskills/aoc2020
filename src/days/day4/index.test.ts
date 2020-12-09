import day, { extractKeyValues, validatePassport } from ".";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

import exerciseinput from "./input/exercise";
import part1output from "./output/part1";
// import part2output from "./output/part2";

describe("solution", () => {
  it("extractKeyValues should convert a string to object", () => {
    const input = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd";
    const expected = {
      ecl: "gry",
      pid: "860033327",
      eyr: "2020",
      hcl: "#fffffd",
    };
    expect(extractKeyValues(input)).toEqual(expected);

    const input2 = "byr:1937 iyr:2017 cid:147 hgt:183cm";
    const expected2 = {
      byr: "1937",
      iyr: "2017",
      cid: "147",
      hgt: "183cm",
    };
    expect(extractKeyValues(input2)).toEqual(expected2);
  });

  it("validatePasport checks required fields (valid)", () => {
    const input = {
      ecl: "gry",
      pid: "860033327",
      eyr: "2020",
      hcl: "#fffffd",
      byr: "1937",
      iyr: "2017",
      cid: "147",
      hgt: "183cm",
    };
    expect(validatePassport(input)).toBe(true);
  });

  it("validatePasport checks missing required fields (not valid)", () => {
    const input = {
      ecl: "gry",
      pid: "860033327",
      hcl: "#fffffd",
      byr: "1937",
      iyr: "2017",
      cid: "147",
      hgt: "183cm",
    };
    expect(validatePassport(input)).toBe(false);
  });

  it("sample input should match output", () => {
    expect(day(sampleinput).resultpart1).toEqual(sampleoutput);
  });

  it("PART 1 - sample input should match output", () => {
    expect(day(exerciseinput).resultpart1).toEqual(part1output);
  });
});
