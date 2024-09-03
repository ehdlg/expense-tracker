"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyData = exports.expenseNotFound = void 0;
const expenseNotFound = (id) => {
    console.log(`Expense ${id} not found.`);
    process.exit(0);
};
exports.expenseNotFound = expenseNotFound;
const emptyData = () => {
    console.log('There are no expenses yet. Use add [options] to add a new expense.');
    process.exit(0);
};
exports.emptyData = emptyData;
