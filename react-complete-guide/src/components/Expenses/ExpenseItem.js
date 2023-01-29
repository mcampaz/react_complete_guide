import React, {useState} from "react";

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';

const ExpenseItem = (props) => {
    // trigger state change; redrawn component
    const [expenseTitle, setTitle] = useState(props.expenseTitle);
//     * @version 16.8.0
//     * @see https://reactjs.org/docs/hooks-reference.html#usestate
//     */
//    function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
//    // convenience overload when first argument is omitted
//    /**
//     * Returns a stateful value, and a function to update it.
//     *
//     * @version 16.8.0
//     * @see https://reactjs.org/docs/hooks-reference.html#usestate
//     */
//    function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
//    /**
//     * An alternative to `useState`.
//     *
//     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
//     * multiple sub-values. It also lets you optimize performance for components that trigger deep
//     * updates because you can pass `dispatch` down instead of callbacks.
//     *
//     * @version 16.8.0
//     * @see https://reactjs.org/docs/hooks-reference.html#usereducer
    
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