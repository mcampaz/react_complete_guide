import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Let's Get Started!</h2>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
