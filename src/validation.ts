import { InvalidArgumentError } from 'commander';

export const myParseFloat = (value: string) => {
  const parsedValue = parseFloat(value);

  if (isNaN(parsedValue)) throw new InvalidArgumentError('Not a number');

  return parsedValue;
};
