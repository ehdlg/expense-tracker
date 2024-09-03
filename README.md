# Expense Tracker CLI

![Expense Tracker CLI](https://i.imgur.com/LEb3st7.png)

This project is a simple CLI tool for managing your expenses, created as part of the roadmap.sh [expense-tracker project](https://roadmap.sh/projects/expense-tracker). The goal of this project is to learn how to use `commander` to create CLI applications in TypeScript, while also refreshing concepts in Node.js such as file reading and writing. The application stores expense data in a JSON file and allows for various operations on these expenses.

## Features

- **Add an Expense**: Easily add a new expense with a description and amount.
- **Update an Expense**: Modify the details of an existing expense.
- **Delete an Expense**: Remove an expense by its ID.
- **List Expenses**: View all the expenses that have been added.
- **Summary of Expenses**: Get a summary of all expenses or filter by a specific month and/or year.
- **JSON Storage**: Expenses are stored in a JSON file, allowing for simple data management.
- **Categories and Budgeting (Upcoming Features)**: Set budgets and filter expenses by category.
- **Export to CSV (Upcoming Feature)**: Export your expenses to a CSV file.

## Installation

You can install the CLI tool globally using npm:

```bash
npm i -g @ehdlg/expense-tracker
```

## Usage

Once installed, you can use the following commands:

Usage: expense-tracker [command] [options]

Commands:

- add [options] Add a new expense
- delete [options] Delete an existing expense
- update [options] Update an existing expense
- list List all the expenses
- summary [options] Gives information about the global expenses or the expenses of a sepecific month and/or year
- help [command] Display help for command

## Examples

### Add a new expense

```bash
expense-tracker add --description "Lunch" --amount 15
```

### Update an expense

```bash
expense-tracker update --id 1 --description "Dinner" --amount 20
```

### List all the expenses

```bash
expense-tracker list
```

### View summary of expenses

```bash
expense-tracker summary
```

### View summary of a specific month and year

```bash
expense-tracker summary -m 8 -y 2023
```

## Learning objectives

- **Commander.js**: Learn how to use commander to build powerful CLI tools.
- **TypeScript**: Practice using TypeScript for Node.js applications.
- **File Operations**: Refresh knowledge on file handling in Node.js by reading and writing JSON data.
- **NPM Publishing**: Package and publish the CLI tool to npm.

## Future enhancements

- **Expense Categories**: Allow filtering expenses by category.
- **Budget Management**: Set and track monthly budgets with warnings for overages.
- **CSV Export**: Enable exporting expense data to CSV files.
- **SQLite as database**: Using SQLite for more robust data storage.
