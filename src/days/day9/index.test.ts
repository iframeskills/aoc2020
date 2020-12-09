import { part1, part2, preamblesplit, contiguousAdd } from ".";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

import exerciseinput from "./input/exercise";
import part1output from "./output/part1";
import part2output from "./output/part2";

describe("solution", () => {
  it("split up pre-amble", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = {
      PREAMBLE: [1, 2, 3, 4, 5],
      REST: [6, 7, 8, 9, 10],
    };
    expect(preamblesplit(input, 5)).toEqual(expected);
  });

  it("contiguousadd to work", () => {
    const input = [1, 2, 3, 4, 5];

    expect(contiguousAdd(input, 3)).toEqual([1, 2]);
    expect(contiguousAdd(input, 10)).toEqual([1, 2, 3, 4]);
  });

  it("contiguousadd with no solution to throw", () => {
    const input = [1, 2, 3, 4, 5];

    expect(() => {
      contiguousAdd(input, 0, 11);
    }).toThrow("No contiguous set found");
  });

  it("contiguousadd example test", () => {
    const input = [
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
      127,
      219,
      299,
      277,
      309,
      576,
    ];

    expect(contiguousAdd(input, 127)).toEqual([15, 25, 47, 40]);
  });

  it("sample input should match output", () => {
    expect(part1(sampleinput, 5)).toEqual(sampleoutput);
  });

  it("PART 1 - example input should match output", () => {
    expect(part1(exerciseinput, 25)).toEqual(part1output);
  });

  it("PART 2 - example input should match output", () => {
    expect(part2(exerciseinput, 217430975)).toEqual(part2output);
  });
});
