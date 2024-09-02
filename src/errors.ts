export const expenseNotFound = (id: number) => {
  console.log(`Expense ${id} not found.`);

  process.exit(0);
};

export const emptyData = () => {
  console.log('There are no expenses yet. Use add [options] to add a new expense.');

  process.exit(0);
};
