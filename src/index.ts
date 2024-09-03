import { Command } from 'commander';
import figlet from 'figlet';
import {
  addExpense,
  deleteExpense,
  listExpenses,
  summarizeExpenses,
  updateExpense,
} from './actions';
import {
  validateAmount,
  validateDate,
  validateId,
  validateInt,
  validateString,
} from './validation';

const program = new Command();

program
  .version('0.0.1', '-v, --version', 'output the current version')
  .description('A CLI tool to manage your expenses');

program
  .command('add')
  .description('Add a new expense')
  .requiredOption('-d, --description <description>', 'Expense description', validateString)
  .requiredOption('-a, --amount <amount>', 'Expense amount', validateAmount)
  .action(addExpense);

program
  .command('delete')
  .description('Delete an existing expense')
  .requiredOption('--id <id>', 'Expense ID', validateId)
  .action(deleteExpense);

program
  .command('update')
  .description('Update an existing expense')
  .requiredOption('--id <id>', 'Expense ID', validateId)
  .option('-a, --amount [amount]', 'New expense amount', validateAmount)
  .option('-d, --description [description]', 'New expense description', validateString)
  .option('--date [date]', 'New expense date', validateDate)
  .action(updateExpense);

program.command('list').description('List all the expenses').action(listExpenses);

program
  .command('summary')
  .description(
    'Gives information about the global expenses or the expenses of a specific month and/or year'
  )
  .option('-m, --month [month]', 'Month to filter the expenses', validateInt)
  .option('-y, --year [year]', 'Year to filter the expenses', validateInt)
  .action(summarizeExpenses);

if (!process.argv.slice(2).length) {
  console.log(figlet.textSync('Expense tracker'));
  program.outputHelp();

  process.exit(0);
}

program.parse(process.argv);
