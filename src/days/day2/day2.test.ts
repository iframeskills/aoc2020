import day2, { validatePolicy, validateTobogganPolicy } from "./day2";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

describe("solution", () => {
  it("validatePolicy", () => {
    const given = { atleast: 1, atmost: 3, letter: "a" };
    const givenPassword = "abcde";

    const given2 = { atleast: 1, atmost: 3, letter: "b" };
    const givenPassword2 = "cdefg";

    const given3 = { atleast: 2, atmost: 9, letter: "c" };
    const givenPassword3 = "ccccccccc";

    expect(validatePolicy(given, givenPassword)).toEqual(true);
    expect(validatePolicy(given2, givenPassword2)).toEqual(false);
    expect(validatePolicy(given3, givenPassword3)).toEqual(true);
  });

  it("validateTobogganPolicy", () => {
    const given = { firstposition: 1, secondposition: 3, letter: "a" };
    const givenPassword = "abcde";

    const given2 = { firstposition: 1, secondposition: 3, letter: "b" };
    const givenPassword2 = "cdefg";

    const given3 = { firstposition: 2, secondposition: 9, letter: "c" };
    const givenPassword3 = "ccccccccc";

    expect(validateTobogganPolicy(given, givenPassword)).toEqual(true);
    expect(validateTobogganPolicy(given2, givenPassword2)).toEqual(false);
    expect(validateTobogganPolicy(given3, givenPassword3)).toEqual(false);
  });

  it("PART 1 - sample input should match output", () => {
    expect(day2(sampleinput).resultpart1).toEqual(sampleoutput);
  });

  it("PART 2 - sample input should match output", () => {
    expect(day2(sampleinput).resultpart1).toEqual(sampleoutput);
  });
});
