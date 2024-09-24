import { useState } from "react";

const App = () => {
  const [interest, setInterest] = useState(3.6);
  const [amount, setAmount] = useState(1000);
  const [year, setYear] = useState(1);
  const [finalInterest, setFinalInterest] = useState(calculateFinalAmount(amount, interest, year));

  function calculateFinalAmount(amount, interest, year) {
    return (amount * interest / 100) * year;
  }

  function updateAmount(event) {
    const newAmount = event.target.value;
    setAmount(newAmount);
    setFinalInterest(calculateFinalAmount(newAmount, interest, year).toFixed(2));
  }

  function updateInterest(event) {
    const newInterest = event.target.value;
    setInterest(newInterest);
    setFinalInterest(calculateFinalAmount(amount, newInterest, year));
  }

  function updateYear(event) {
    const newYear = event.target.value;
    setYear(newYear);
    setFinalInterest(calculateFinalAmount(amount, interest, newYear));
  }

  return (
    <div id="container">
      <h1 id="topHeader">Simple Interest Calculator</h1>
      <label>Amount($):<input onChange={updateAmount} value={amount} className="userInput"></input></label><br/>
      <label>Interest(%):<input onChange={updateInterest} value={interest} className="userInput"></input></label><br/>
      <label>Year:<input onChange={updateYear} value={year} className="userInput"></input></label>
      <h3>The Interest You Need To Pay/Get Is {finalInterest}$</h3>
    </div>
  );
}

export default App;
