export const mapDiff = (input: number[]) => Math.abs(input[0] - input[1]);

export const countOccurences = (input: number[]): Map<number, number> => {
  const countedMap = new Map(
    [...new Set(input)].map((x) => [x, input.filter((y) => y === x).length])
  );
  return countedMap;
};

export const countValidApproaches = ({
  input,
  index,
}: {
  input: number[];
  index: number;
}) => 0; // o_o

export default (input: string) => {
  const numbers: number[] = input.split("\n").map((item) => +item);
  const orderedNumbers: number[] = numbers.sort((a, b) => a - b);

  const differences = [
    mapDiff([0, orderedNumbers[0]]), // count first one
    ...orderedNumbers.map(
      (number, index) =>
        numbers[index + 1] ? mapDiff([number, numbers[index + 1]]) : 3 // last always 3
    ),
  ];

  const amountOf1Differences = countOccurences(differences).get(1);
  const amountOf3Differences = countOccurences(differences).get(3);

  const resultpart1 = amountOf1Differences * amountOf3Differences;

  const resultpart2 = countValidApproaches({
    input: orderedNumbers,
    index: 0,
  });

  return { resultpart1, resultpart2 };
};
