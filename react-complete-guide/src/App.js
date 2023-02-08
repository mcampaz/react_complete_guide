import './App.css';

import {useState} from "react";

import Card from './components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';


const App = () => {
  const expenses = [
    { 
      expenseDate: new Date(2012, 3, 9), 
      expenseTitle: 'Car Insurance',
      expenseAmount: 302.60
    },
    {
      expenseDate: new Date(2012, 7, 25), 
      expenseTitle: 'Car Maintenance',
      expenseAmount: 82.50
    },
    {
      expenseDate: new Date(2012, 5, 8), 
      expenseTitle: 'House Insurance',
      expenseAmount: 1202.40
    },
    {
      expenseDate: new Date(2012, 2, 14), 
      expenseTitle: 'Groceries',
      expenseAmount: 502.20
    },
    {
      expenseDate: new Date(2012, 5, 5), 
      expenseTitle: 'Pet food',
      expenseAmount: 102.10
    }
  ];

  const addExpenseHandler = newExpense => {
    console.log('In App.js: ');
    console.log(newExpense);
  };

  const [filteredYear, setFilteredYear] = useState('2012');

  const selectYearHandler = selectedYear =>{
    console.log('In App.js: ');
    console.log(selectedYear);
    setFilteredYear(selectedYear)
  };

  return (
    <div className="expense-index">
      <NewExpense onAddExpense={addExpenseHandler}/>
      
      <Card className="expense-index-items">      
        <ExpenseFilter selected={filteredYear} onSelectedYear={selectYearHandler}/>
        {
          expenses.map(expense => (
            <ExpenseItem expenseDate={expense.expenseDate}
                        expenseTitle={expense.expenseTitle}
                        expenseAmount={expense.expenseAmount}
                        >
            </ExpenseItem>
          ))}
      </Card>  
    </div>
  )
};

export default App;
