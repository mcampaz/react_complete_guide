import React, {useState} from "react";

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';

const ExpenseItem = (props) => {
    // trigger state change; redrawn component
    const [expenseTitle, setTitle] = useState(props.expenseTitle);
    // console.log("Expense drawn by react!")
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(expenseTitle);
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate expenseDateDetail={props.expenseDate}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{'$'+ props.expenseAmount}</div>
                <button onClick={clickHandler}>Change Description!</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;