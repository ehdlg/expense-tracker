import { InvalidArgumentError } from 'commander';

export const validateAmount = (value: string) => {
  const parsedValue = parseFloat(value);

  if (isNaN(parsedValue)) throw new InvalidArgumentError('Not a number');

  if (parsedValue <= 0) throw new InvalidArgumentError('Amount must be a number greater than 0');

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

export const validateDate = (value: string) => {
  const date = new Date(value);

  if (isNaN(date.getTime())) throw new InvalidArgumentError('Invalid date');

  return date;
};
