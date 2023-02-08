import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = event => {
        console.log('In ExpenseFilter.js: ');
        console.log(event.target.value);
        props.onSelectedYear(event.target.value);
    }
    return (
        <div>
            <label htmlFor="">Filter by Year:  </label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option selected value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
            </select>
        </div>
    );

};

export default ExpenseFilter;