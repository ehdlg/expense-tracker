#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const actions_1 = require("./actions");
const validation_1 = require("./validation");
const program = new commander_1.Command();
program
    .version('0.0.1', '-v, --version', 'output the current version')
    .description('A CLI tool to manage your expenses');
program
    .command('add')
    .description('Add a new expense')
    .requiredOption('-d, --description <description>', 'Expense description', validation_1.validateString)
    .requiredOption('-a, --amount <amount>', 'Expense amount', validation_1.validateAmount)
    .action(actions_1.addExpense);
program
    .command('delete')
    .description('Delete an existing expense')
    .requiredOption('--id <id>', 'Expense ID', validation_1.validateId)
    .action(actions_1.deleteExpense);
program
    .command('update')
    .description('Update an existing expense')
    .requiredOption('--id <id>', 'Expense ID', validation_1.validateId)
    .option('-a, --amount [amount]', 'New expense amount', validation_1.validateAmount)
    .option('-d, --description [description]', 'New expense description', validation_1.validateString)
    .option('--date [date]', 'New expense date', validation_1.validateDate)
    .action(actions_1.updateExpense);
program.command('list').description('List all the expenses').action(actions_1.listExpenses);
program
    .command('summary')
    .description('Gives information about the global expenses or the expenses of a specific month and/or year')
    .option('-m, --month [month]', 'Month to filter the expenses', validation_1.validateInt)
    .option('-y, --year [year]', 'Year to filter the expenses', validation_1.validateInt)
    .action(actions_1.summarizeExpenses);
if (!process.argv.slice(2).length) {
    console.log(figlet_1.default.textSync('Expense tracker'));
    program.outputHelp();
    process.exit(0);
}
program.parse(process.argv);
