interface KeyValue {
  [key: string]: string;
}

export const extractKeyValues = (input: string): KeyValue => {
  const result = input
    .split(" ")
    .filter((keyvaluepair) => keyvaluepair.includes(":")) // remove empty
    .map((keyvaluepair) => keyvaluepair.split(":"));

  return Object.fromEntries(result);
};

export const validatePassport = (input: KeyValue): boolean => {
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  const inputKeys = Object.keys(input);

  let isValid = true;
  // for each required field
  requiredFields.forEach((requiredField) => {
    if (!inputKeys.includes(requiredField)) {
      // console.log("missing", requiredField);
      isValid = false;
    }
  });
  return isValid;
};

export default (input: string) => {
  const lines: string[] = input.split(/\r?\n/); // newlines

  const passports = lines.reduce(
    (previous, next) => {
      const result: KeyValue[] = previous;
      if (next === "") {
        // new item
        result.push({});
      }

      const newKeys = extractKeyValues(next);
      result[result.length - 1] = { ...result[result.length - 1], ...newKeys };
      return result;
    },
    [{}]
  );

  let validPassports = 0;
  passports.forEach((passport) => {
    if (validatePassport(passport)) {
      validPassports += 1;
    }
  });

  const resultpart1 = validPassports;

  const resultpart2 = "";

  return { resultpart1, resultpart2 };
};
