export const getPosition = (
  input: string,
  maximum: number,
  lowerboundCharacter: string,
  upperboundCharacter: string
) => {
  const directions = input.split("");
  const range = Array.from({ length: maximum }, (_, index) => index + 1);

  directions.forEach((direction) => {
    if (direction === lowerboundCharacter) {
      range.splice(0, range.length / 2);
    }
    if (direction === upperboundCharacter) {
      range.splice(range.length / 2, range.length);
    }
  });

  // make it 0-based; -1
  return range[0] - 1;
};

export const getRow = (input: string): number =>
  getPosition(input, 128, "B", "F");
export const getColumn = (input: string): number =>
  getPosition(input, 8, "R", "L");
export const getId = (row: number, column: number) => row * 8 + column;

export const getMissingFromList = (list: number[]) => {
  let missingEntry: number;

  list.forEach((number, index) => {
    const nextValue = list[index + 1];
    const nextExpectedValue = number + 1;
    if (nextValue && nextValue !== nextExpectedValue) {
      missingEntry = nextExpectedValue;
    }
  });

  return missingEntry;
};

export const decodeTicket = (input: string) => ({
  id: getId(getRow(input), getColumn(input)),
  row: getRow(input),
  column: getColumn(input),
});

export default (input: string) => {
  const lines: string[] = input.split("\n");
  // F means "front", B means "back", L means "left", and R means "right".

  // First 7 characters = row "dividers" for range 0-127
  // last 3 characters = column "dividers " for range 0-7

  // unique seat ID: multiply the row by 8, then add the column.

  // What is the highest seat ID on a boarding pass?

  const tickets = lines.map((line) => decodeTicket(line));
  const ticketIds = tickets.map((ticket) => ticket.id);

  const highestSeatId = Math.max(...ticketIds);

  const resultpart1 = highestSeatId;

  // what id is missing, (but not at the start or end)
  const sortedTicketids = ticketIds.sort((a, b) => a - b);

  const resultpart2 = getMissingFromList(sortedTicketids);

  return { resultpart1, resultpart2 };
};
