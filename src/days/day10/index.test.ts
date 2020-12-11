import day, { mapDiff, countOccurences, countValidApproaches } from ".";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

describe("solution", () => {
  it("should return counts", () => {
    expect(countOccurences([20, 21, 20, 20]).get(20)).toEqual(3);
    expect(countOccurences([0, 0, 0, 0, 0, 0]).get(0)).toEqual(6);
  });

  it("should return difference", () => {
    expect(mapDiff([20, 21])).toEqual(1);
    expect(mapDiff([1, 3])).toEqual(2);

    expect(mapDiff([3, 0])).toEqual(3);
    expect(mapDiff([3, 1])).toEqual(2);
  });

  xit("countValidApproaches", () => {
    expect(
      countValidApproaches({
        input: [1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19],
        index: 0,
      })
    ).toEqual(8);
  });

  it("sample input should match output", () => {
    expect(day(sampleinput).resultpart1).toEqual(sampleoutput);
  });
});
