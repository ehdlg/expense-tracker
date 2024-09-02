export type Expense = {
  id: number;
  description: string;
  amount: number;
  date: string;
};

export type NewExpense = Pick<Expense, 'amount' | 'description'>;

export type UpdateExpense = Partial<Expense> & Pick<Expense, 'id'>;

export type DeleteExpense = Pick<Expense, 'id'>;
