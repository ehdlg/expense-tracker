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

export const validateId = (value: string) => {
  const parsedValue = parseInt(value);

  if (isNaN(parsedValue) || parsedValue < 0) throw new InvalidArgumentError('Invalid ID');

  return parsedValue;
};
