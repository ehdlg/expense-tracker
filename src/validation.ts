import { InvalidArgumentError } from 'commander';

export const myParseFloat = (value: string) => {
  const parsedValue = parseFloat(value);

  if (isNaN(parsedValue)) throw new InvalidArgumentError('Not a number');

  return parsedValue;
};

export const validateString = (value: string) => {
  const newString = value.trim();

  if (newString.length == 0) throw new InvalidArgumentError('Cannot be empty');

  return newString;
};
