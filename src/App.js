import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 2500,
      LocationOfExpenditure: "Gas Station",
      date: new Date(2023, 7, 11),
    },
    {
      id: 2,
      title: "Furniture",
      amount: 27500,
      LocationOfExpenditure: "Carpenter",

      date: new Date(2023, 3, 21),
    },
    {
      id: 3,
      title: "Petrol",
      amount: 200,
      LocationOfExpenditure: "Fuel Station",

      date: new Date(2023, 5, 27),
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].LocationOfExpenditure}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].LocationOfExpenditure}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].LocationOfExpenditure}
      />
    </div>
  );
}

export default App;
