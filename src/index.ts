import { Command } from 'commander';
import figlet from 'figlet';
import { addExpense, listExpenses } from './actions';
import { myParseFloat, validateString } from './validation';

const program = new Command();

program
  .version('0.0.1', '-v, --version', 'output the current version')
  .description('A CLI tool to manage your expenses');

program
  .command('add')
  .description('Add a new expense')
  .requiredOption(
    '-d, --description <description>',
    'The expense must have a description',
    validateString
  )
  .requiredOption('-a, --amount <amount>', 'The expense must have an amount', myParseFloat)
  .action(addExpense);

program.command('list').description('List all the expenses').action(listExpenses);

if (!process.argv.slice(2).length) {
  console.log(figlet.textSync('Expense tracker'));
  program.outputHelp();

  process.exit(0);
}

program.parse(process.argv);
