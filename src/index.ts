import { Command } from 'commander';
import figlet from 'figlet';
import { addExpense, deleteExpense, listExpenses, updateExpense } from './actions';
import { validateAmount, validateDate, validateId, validateString } from './validation';

const program = new Command();

program
  .version('0.0.1', '-v, --version', 'output the current version')
  .description('A CLI tool to manage your expenses');

program
  .command('add')
  .description('Add a new expense')
  .requiredOption(
    '-d, --description <description>',
    'A description must be provided',
    validateString
  )
  .requiredOption('-a, --amount <amount>', 'An amount must be provided', validateAmount)
  .action(addExpense);

program
  .command('delete')
  .description('Delete a saved expense')
  .requiredOption('--id <id>', 'Expense ID must be provided', validateId)
  .action(deleteExpense);

program
  .command('update')
  .description('Update an existing expense')
  .requiredOption('--id <id>', 'Expense ID must be provided', validateId)
  .option('-a, --amount [amount]', 'New expense amount', validateAmount)
  .option('-d, --description [description]', 'New expense description', validateString)
  .option('--date [date]', 'New expense date', validateDate)
  .action(updateExpense);

program.command('list').description('List all the expenses').action(listExpenses);

if (!process.argv.slice(2).length) {
  console.log(figlet.textSync('Expense tracker'));
  program.outputHelp();

  process.exit(0);
}

program.parse(process.argv);
