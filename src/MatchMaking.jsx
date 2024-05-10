import React, { useState } from 'react';
import "./Mm.css";



const FlamesCalculator = {
  flames: ['Friend', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'],
  
  calculateResult: (name1, name2) => {
    const name1Chars = name1.toLowerCase().replace(/[^a-z]/g, '');
    const name2Chars = name2.toLowerCase().replace(/[^a-z]/g, '');
    
    let remainingChars = name1Chars + name2Chars;
    
    for (let char of name1Chars) {
      if (name2Chars.includes(char)) {
        remainingChars = remainingChars.replace(char, '');
      }
    }
    
    const resultIndex = remainingChars.length % FlamesCalculator.flames.length;
    
    return FlamesCalculator.flames[resultIndex];
  },
};

function MatchMaking() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name1') {
      setName1(value);
    } else {
      setName2(value);
    }
  };

  const handleCalculate = () => {
    setResult(FlamesCalculator.calculateResult(name1, name2));
  };
  


  return (
    <div className="container7">
      <h1>Flames Game</h1>
      <input type="text" name="name1" value={name1} onChange={handleNameChange} placeholder="Enter Name 1" />
      <input type="text" name="name2" value={name2} onChange={handleNameChange} placeholder="Enter Name 2" />
      <button onClick={handleCalculate}>Calculate Flames</button>
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
  
 }
export default MatchMaking;