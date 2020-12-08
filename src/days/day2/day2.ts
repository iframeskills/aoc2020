export const SumsTo2020 = (a: number, b: number, c: number = 0) =>
  a + b + c === 2020;
export const multiply = (a: number, b: number, c: number = 1) => a * b * c;

interface SolutionResult {
  resultpart1: number | undefined;
  resultpart2: number | undefined;
}

export const validatePolicy = (
  policy: { atleast: number; atmost: number; letter: string },
  password: string
) => {
  const letters: string[] = password.split("");
  let letterOccurences = 0;
  letters.forEach((loopedLetter) => {
    if (loopedLetter === policy.letter) {
      letterOccurences += 1;
    }
  });

  return (
    letterOccurences >= policy.atleast && letterOccurences <= policy.atmost
  );
};

export const validateTobogganPolicy = (
  policy: { firstposition: number; secondposition: number; letter: string },
  password: string
) => {
  const letters: string[] = password.split("");
  const firstLetter = letters[policy.firstposition - 1];
  const secondLetter = letters[policy.secondposition - 1];

  const sameFirstLetter = firstLetter === policy.letter;
  const sameSecondLetter = secondLetter === policy.letter;

  return (
    (sameFirstLetter || sameSecondLetter) &&
    sameFirstLetter !== sameSecondLetter
  );
};

export default (input: string): SolutionResult => {
  const passwords: string[] = input.split("\n");
  let validPasswordCount = 0;

  passwords.forEach((line) => {
    const [policy, password] = line.split(": ");

    const [atleast, rest] = policy.split("-");
    const [atmost, letter] = rest.split(" ");

    const passwordIsValid = validatePolicy(
      { atleast: +atleast, atmost: +atmost, letter },
      password
    );
    if (passwordIsValid) {
      validPasswordCount += 1;
    }
  });

  const resultpart1 = validPasswordCount;

  let validPasswordCountPartTwo = 0;

  passwords.forEach((line) => {
    const [policy, password] = line.split(": ");

    const [firstposition, rest] = policy.split("-");
    const [secondPosition, letter] = rest.split(" ");

    const passwordIsValid = validateTobogganPolicy(
      {
        firstposition: +firstposition,
        secondposition: +secondPosition,
        letter,
      },
      password
    );
    if (passwordIsValid) {
      validPasswordCountPartTwo += 1;
    }
  });

  const resultpart2 = validPasswordCountPartTwo;

  return { resultpart1, resultpart2 };
};
