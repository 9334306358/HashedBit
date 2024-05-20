
import React, { useState } from 'react';
import './App.css';

function App() {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [result, setResult] = useState('');

  const performOperation = (operator) => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <div className="calculator">
      <input
        type="number"
        placeholder="Enter operand 1"
        value={operand1}
        onChange={(e) => setOperand1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter operand 2"
        value={operand2}
        onChange={(e) => setOperand2(e.target.value)}
      />
      <button onClick={() => performOperation('+')}>Add</button>
      <button onClick={() => performOperation('-')}>Subtract</button>
      <button onClick={() => performOperation('*')}>Multiply</button>
      <button onClick={() => performOperation('/')}>Divide</button>
      <div className="result">Result: {result}</div>
    </div>
  );
}

export default App;
