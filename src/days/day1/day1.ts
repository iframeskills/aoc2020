export const SumsTo2020 = (a: number, b: number, c: number = 0) =>
  a + b + c === 2020;
export const multiply = (a: number, b: number, c: number = 1) => a * b * c;

interface SolutionResult {
  resultpart1: number | undefined;
  resultpart2: number | undefined;
}

export default (input: string): SolutionResult => {
  const numbers: number[] = input.split("\n").map((item) => +item);

  let resultpart1;

  numbers.forEach((number1) => {
    numbers.forEach((number2) => {
      if (SumsTo2020(number1, number2)) {
        resultpart1 = multiply(number1, number2);
      }
    });
  });

  let resultpart2;

  numbers.forEach((number1) => {
    numbers.forEach((number2) => {
      numbers.forEach((number3) => {
        if (SumsTo2020(number1, number2, number3)) {
          resultpart2 = multiply(number1, number2, number3);
        }
      });
    });
  });

  return { resultpart1, resultpart2 };
};
