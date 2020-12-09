export const countCharacters = (characters: string) =>
  characters.split("").length;

export const mergeCharacters = (groups: string[]): string => {
  const uniqueCharacters = new Set();
  groups.forEach((characters) => {
    characters
      .split("")
      .forEach((character: string) => uniqueCharacters.add(character));
  });
  return [...uniqueCharacters].join("");
};

export const mergeOnlyCommonCharacters = (groups: string[]): string => {
  const groupSize = groups.length;
  const commonCharacters: Map<string, number> = new Map();
  groups.forEach((characters) => {
    characters.split("").forEach((character: string) => {
      const value: number = commonCharacters.get(character);
      if (value) {
        commonCharacters.set(character, value + 1);
      } else {
        commonCharacters.set(character, 1);
      }
    });
  });

  const filteredCharacters = new Map(
    // eslint-disable-next-line no-unused-vars
    [...commonCharacters].filter(([key, value]) => value === groupSize)
  );

  return [...filteredCharacters.keys()].join("");
};

export default (input: string) => {
  const lines: string[] = input.split(/\r?\n/); // newlines

  const groups = lines.reduce(
    (previous, next) => {
      const result: string[][] = previous;
      if (next === "") {
        result.push([]);
        return result;
      }

      result[result.length - 1].push(next);
      return result;
    },
    [[]]
  );

  const mergedGroups = groups.map(mergeCharacters);
  const mergedGroupsCount = mergedGroups.map(countCharacters);
  const mergedGroupsCountSum = mergedGroupsCount.reduce(
    (prev, next) => prev + next
  );

  const resultpart1 = mergedGroupsCountSum;

  const mergeOnlyCommonCharactersResult = groups.map(mergeOnlyCommonCharacters);
  const mergeOnlyCommonCharactersResultCount = mergeOnlyCommonCharactersResult.map(
    countCharacters
  );

  const resultpart2 = mergeOnlyCommonCharactersResultCount.reduce(
    (prev, next) => prev + next
  );

  return { resultpart1, resultpart2 };
};
