import "./ExpenseDate.css"
import Card from'../UI/Card.js'


const ExpenseDate = (props) => {
    const expenseMonth = props.expenseDateDetail.toLocaleString('en-US', {month: 'long'}); 
    const expenseYear = props.expenseDateDetail.toLocaleString('en-US', {year: 'numeric'}); 
    const expenseWeekday = props.expenseDateDetail.toLocaleString('en-US', {weekday: 'short'}); 
    const expenseDay = props.expenseDateDetail.toLocaleString('en-US', {day: '2-digit'}); 

    
    
    return (
        <Card className="expense-date-detail">
            <div className="expense-date-detail-month">{expenseMonth}</div>
            <div className="expense-date-detail-year">{expenseYear}</div>
            <div className="expense-date-detail-weekday">{expenseWeekday}</div>
            <div className="expense-date-detail-day">{expenseDay}</div>
        </Card>
    );
}

export default ExpenseDate;