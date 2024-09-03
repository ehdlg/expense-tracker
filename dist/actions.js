"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeExpenses = exports.listExpenses = exports.updateExpense = exports.deleteExpense = exports.addExpense = void 0;
const utils_1 = require("./utils");
const table_1 = require("table");
const errors_1 = require("./errors");
const constants_1 = require("./constants");
const addExpense = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, utils_1.getData)();
    const newExpense = Object.assign(Object.assign({}, options), { id: (0, utils_1.getId)(data), date: (0, utils_1.formatDate)(new Date().toISOString()) });
    data.push(newExpense);
    yield (0, utils_1.saveData)(data);
    console.log(`Expense added suffesfully (ID: ${newExpense.id})`);
    process.exit(0);
});
exports.addExpense = addExpense;
const deleteExpense = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = options;
    const data = yield (0, utils_1.getData)();
    if (data.length === 0)
        return (0, errors_1.emptyData)();
    const index = data.findIndex((expense) => +expense.id === id);
    if (index === -1)
        return (0, errors_1.expenseNotFound)(id);
    const newData = [...data.slice(0, +index), ...data.slice(+index + 1)];
    yield (0, utils_1.saveData)(newData);
    console.log('Expense deleted successfully');
    process.exit(0);
});
exports.deleteExpense = deleteExpense;
const updateExpense = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, amount, description, date } = options;
    const data = yield (0, utils_1.getData)();
    if (data.length === 0)
        return (0, errors_1.emptyData)();
    const index = data.findIndex((expense) => +expense.id === id);
    if (index === -1)
        return (0, errors_1.expenseNotFound)(id);
    data[index] = Object.assign(Object.assign({}, data[index]), { amount: amount !== null && amount !== void 0 ? amount : data[index].amount, date: date !== null && date !== void 0 ? date : data[index].date, description: description !== null && description !== void 0 ? description : data[index].description });
    yield (0, utils_1.saveData)(data);
    console.log(`Expense ${id} updated successfully`);
    process.exit(0);
});
exports.updateExpense = updateExpense;
const listExpenses = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, utils_1.getData)();
    if (data.length === 0)
        return (0, errors_1.emptyData)();
    const expenses = [
        ['ID', 'Description', 'Amount', 'Date'],
        ...data.map((expense) => {
            return [expense.id, expense.description, `$${expense.amount}`, (0, utils_1.formatDate)(expense.date)];
        }),
    ];
    console.log((0, table_1.table)(expenses, {
        header: { content: 'Expense List' },
        border: (0, table_1.getBorderCharacters)('norc'),
    }));
    process.exit(0);
});
exports.listExpenses = listExpenses;
const summarizeExpenses = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { month, year } = options;
    let data = yield (0, utils_1.getData)();
    let filterYear = null;
    let filterMonth = null;
    if (month != null || year != null) {
        filterYear = year !== null && year !== void 0 ? year : constants_1.DEFAULT_YEAR;
        filterMonth = month !== null && month !== void 0 ? month : null;
        data = data.filter((expense) => {
            const expenseDate = new Date(expense.date);
            const expenseMonth = expenseDate.getMonth() + 1;
            const expenseYear = +expenseDate.getFullYear();
            return (null === filterMonth || expenseMonth === filterMonth) && expenseYear === filterYear;
        });
    }
    const initialValue = 0;
    const total = data.reduce((acc, expense) => acc + expense.amount, initialValue);
    console.log(`Total expenses: $${total}${filterYear != null
        ? ` for ${filterMonth != null ? `${constants_1.Month[filterMonth]}, ` : ''}${filterYear}`
        : ''}`);
    process.exit(0);
});
exports.summarizeExpenses = summarizeExpenses;
