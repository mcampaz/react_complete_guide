import {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    const titleChangeHandler = (event) => {
        // individual title change
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // individual amount change
        console.log(event.target.value)
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        // individual date change
        setEnteredDate(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>  
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label htmlFor="title">Description</label>
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type='number' 
                        min='0.00' 
                        step='0.05' 
                        value={enteredAmount || 0.00}
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input type="date" 
                        min="2020-01-01" 
                        max="2024-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>
            <div className="new-expense__add">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;