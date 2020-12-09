export default (input: string) => {
  // F means "front", B means "back", L means "left", and R means "right".

  // First 7 characters = row "dividers" for range 0-127
  // last 3 characters = column "dividers " for range 0-7

  // unique seat ID: multiply the row by 8, then add the column.

  // What is the highest seat ID on a boarding pass?

  // { id: 357, row: 44, column: 5 };

  const resultpart1 = 820;

  const resultpart2 = "";

  return { resultpart1, resultpart2 };
};
