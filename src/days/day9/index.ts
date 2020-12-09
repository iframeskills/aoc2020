export const preamblesplit = (
  input: number[],
  PREAMBLE_SIZE: number,
  offset: number = 0
) => ({
  PREAMBLE: input.slice(offset, PREAMBLE_SIZE + offset),
  REST: input.slice(PREAMBLE_SIZE + offset, input.length),
});

export const SumsToX = (a: number, b: number, x: number): boolean =>
  a + b === x;

// loop through all numbers;
export const contiguousAdd = (
  set: number[],
  result: number,
  fromIndex: number = -1
): number[] => {
  let currentSum = 0;
  const contiguousSet: number[] = [];
  let currentIndex = fromIndex;
  const filteredSet = set.slice(currentIndex + 1, set.length);

  // eslint-disable-next-line no-restricted-syntax
  for (const number of filteredSet) {
    contiguousSet.push(number);
    currentSum += number;

    if (currentSum > result) {
      currentIndex += 1;
      if (currentIndex >= set.length) break;
      // not found; try again higher
      return contiguousAdd(set, result, currentIndex);
    }
    if (currentSum === result) {
      return contiguousSet;
    }
  }

  throw new Error("No contiguous set found");
};

export const part1 = (input: string, PREAMBLE_SIZE = 25) => {
  const numbers: number[] = input.split("\n").map((number) => +number);

  let PREAMBLE_POSITION = 0;

  let { PREAMBLE, REST } = preamblesplit(numbers, PREAMBLE_SIZE);
  let numberNotInPreamble = 0;
  let firstOccurence = true;

  REST.forEach((number) => {
    let sumIsInPreamble = false;
    PREAMBLE.forEach((preamblenumber1) => {
      PREAMBLE.forEach((preamblenumber2) => {
        if (SumsToX(preamblenumber1, preamblenumber2, number)) {
          sumIsInPreamble = true;
        }
      });
    });

    PREAMBLE_POSITION += 1;
    const preamblesplitresult = preamblesplit(
      numbers,
      PREAMBLE_SIZE,
      PREAMBLE_POSITION
    );
    PREAMBLE = preamblesplitresult.PREAMBLE;
    REST = preamblesplitresult.REST;

    if (!sumIsInPreamble && firstOccurence) {
      numberNotInPreamble = number;
      firstOccurence = false;
    }
  });

  return numberNotInPreamble;
};

export const part2 = (input: string, toCompare: number) => {
  const numbers: number[] = input.split("\n").map((number) => +number);
  let resultpart2;
  try {
    const contiguousSet = contiguousAdd(numbers, toCompare, 0);
    const highest = Math.max(...contiguousSet);
    const lowest = Math.min(...contiguousSet);

    resultpart2 = lowest + highest;
  } catch (e) {
    resultpart2 = ["not found"];
  }
  return resultpart2;
};
