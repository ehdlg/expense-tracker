export type Expense = {
  id: number;
  description: string;
  amount: number;
  date: Date;
};

export type Options = Pick<Expense, 'amount' | 'description'>;
