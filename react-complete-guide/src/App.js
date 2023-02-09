import './App.css';

import { useState } from "react";

import Card from './components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';

const INITIAL_EXPENSES = [
  { 
    id: 'ei111',
    expenseDate: new Date(2012, 3, 9), 
    expenseTitle: 'MotoCar Insurance',
    expenseAmount: 302.60
  },
  
  { 
    id: 'ei143',
    expenseDate: new Date(2013, 3, 9), 
    expenseTitle: 'House Insurance',
    expenseAmount: 302.60
  },  
  { 
    id: 'ei3123',
    expenseDate: new Date(2014, 3, 9), 
    expenseTitle: 'Carpot Insurance',
    expenseAmount: 302.60
  },
  { 
    id: 'ei4123',
    expenseDate: new Date(2015, 3, 9), 
    expenseTitle: 'Moto Insurance',
    expenseAmount: 302.60
  },
  { 
    id: 'ei1263',
    expenseDate: new Date(2016, 3, 9), 
    expenseTitle: 'Surf Insurance',
    expenseAmount: 302.60
  },
  {
    id: 'ei1524',
    expenseDate: new Date(2012, 7, 25), 
    expenseTitle: 'Life Maintenance',
    expenseAmount: 82.50
  },
  {
    id: 'ei1275',
    expenseDate: new Date(2012, 5, 8), 
    expenseTitle: 'House Insurance',
    expenseAmount: 1202.40
  },
  {
    id: 'ei4126',
    expenseDate: new Date(2012, 2, 14), 
    expenseTitle: 'Groceries',
    expenseAmount: 502.20
  },
  {
    id: 'ei1627',
    expenseDate: new Date(2015, 5, 5), 
    expenseTitle: 'Pet food',
    expenseAmount: 102.10
  },
  { 
    id: 'ei1823',
    expenseDate: new Date(2016, 3, 9), 
    expenseTitle: 'Office Insurance',
    expenseAmount: 302.60
  },
  { 
    id: 'ei1923',
    expenseDate: new Date(2013, 3, 9), 
    expenseTitle: 'Lot Insurance',
    expenseAmount: 302.60
  },
  { 
    id: 'ei1203',
    expenseDate: new Date(2014, 3, 9), 
    expenseTitle: 'Car Insurance 2014',
    expenseAmount: 302.60
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };


  const [filteredYear, setFilteredYear] = useState('2012');

  const selectYearHandler = selectedYear =>{
    console.log('In App.js: before filter');
    console.log(filteredYear);
    setFilteredYear(selectedYear);
  };

  const expensesDateByYear = expenses.filter(expense => {
    return expense.expenseDate.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expense-index">
      <NewExpense onAddExpense={addExpenseHandler}/>
      
      <Card className="expense-index-items">      
        <ExpenseFilter selected={filteredYear} onSelectedYear={selectYearHandler}/>
        {
          expensesDateByYear.map(expense => (
            <ExpenseItem key={expense.id} expenseDate={expense.expenseDate}
                        expenseTitle={expense.expenseTitle}
                        expenseAmount={expense.expenseAmount}
            />
          ))}
      </Card>  
    </div>
  )
};

export default App;
