"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInt = exports.validateDate = exports.validateId = exports.validateString = exports.validateAmount = void 0;
const commander_1 = require("commander");
const validateAmount = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue))
        throw new commander_1.InvalidArgumentError('Not a number');
    if (parsedValue <= 0)
        throw new commander_1.InvalidArgumentError('Amount must be a number greater than 0');
    return parsedValue;
};
exports.validateAmount = validateAmount;
const validateString = (value) => {
    const newString = value.trim();
    if (newString.length == 0)
        throw new commander_1.InvalidArgumentError('Cannot be empty');
    return newString;
};
exports.validateString = validateString;
const validateId = (value) => {
    const parsedValue = (0, exports.validateInt)(value);
    if (parsedValue < 0)
        throw new commander_1.InvalidArgumentError('Invalid ID');
    return parsedValue;
};
exports.validateId = validateId;
const validateDate = (value) => {
    const date = new Date(value);
    if (isNaN(date.getTime()))
        throw new commander_1.InvalidArgumentError('Invalid date');
    return date;
};
exports.validateDate = validateDate;
const validateInt = (value) => {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue))
        throw new commander_1.InvalidArgumentError('Not a number');
    return parsedValue;
};
exports.validateInt = validateInt;
