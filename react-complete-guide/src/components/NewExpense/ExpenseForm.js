import {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    

    const titleChangeHandler = (event) => {
        // individual change
        // setEnteredTitle(event.target.value);
        
        // faulty method unified
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        setUserInput(prevState => {
            return {
            ...prevState,
            enteredTitle: Number(event.target.value),
            };
        });
    };

    const amountChangeHandler = event => {
        setUserInput(prevState => {
            return {
            ...prevState,
            enteredDate: new Date(event.target.value),
            };
        });
    };

    const dateChangeHandler = event => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        titleChangeHandler(event);
        console.log('title_handler: ' + userInput.enteredTitle);
        amountChangeHandler(event);
        console.log('amount_handler: ' + userInput.enteredAmount);
        dateChangeHandler(event);

        console.log('date_handler: ' + userInput.enteredDate);
        setUserInput.enteredTitle();
    };

    return (
        <form onSubmit={submitHandler}>  
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label htmlFor="Title">Description</label>
                    <input 
                        type="text" 
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="Amount">Amount</label>
                    <input 
                        type="number" 
                        min="0.05" 
                        step="0.05" 
                        value={userInput.enteredAmount}
                        onChanged={amountChangeHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="Date">Date</label>
                    <input type="date" 
                        min="2020-01-01" 
                        max="2024-12-31" 
                        value={userInput.enteredDate}
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