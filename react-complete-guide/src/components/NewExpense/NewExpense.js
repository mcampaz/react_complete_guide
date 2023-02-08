import Expenseform from './ExpenseForm'
import Card from '../UI/Card';

const NewExpense = (props) => {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('expenseData in NewExpense: ');
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

   return (
        <Card>
            <Expenseform onSaveExpenseData={saveExpenseDataHandler} />
        </Card>
    )
};

export default NewExpense;