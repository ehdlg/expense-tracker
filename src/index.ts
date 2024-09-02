import { Command } from 'commander';
import figlet from 'figlet';
import { addExpense, deleteExpense, listExpenses } from './actions';
import { myParseFloat, validateId, validateString } from './validation';

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
  .requiredOption('-a, --amount <amount>', 'An amount must be provided', myParseFloat)
  .action(addExpense);

program
  .command('delete')
  .description('Delete a saved expense')
  .requiredOption('--id <id>', 'Expense ID must be provided', validateId)
  .action(deleteExpense);

program.command('list').description('List all the expenses').action(listExpenses);

if (!process.argv.slice(2).length) {
  console.log(figlet.textSync('Expense tracker'));
  program.outputHelp();

  process.exit(0);
}

program.parse(process.argv);
