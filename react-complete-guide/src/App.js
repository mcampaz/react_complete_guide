import './App.css';

import Card from './components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';

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

  return (
    <div className="expense-index">
      <h2>Let's Get Started!</h2>
      <Card className="expense-index-items">      
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
