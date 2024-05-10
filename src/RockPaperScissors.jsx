import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './rps.css';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];

  const handlePlayerChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a tie!");
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  const renderPlayerChoiceIcon = () => {
    switch (playerChoice) {
      case 'rock':
        return <FaHandRock size={60} color='grey' />;
      case 'paper':
        return <FaHandPaper size={60} color='orange' />;
      case 'scissors':
        return <FaHandScissors size={60} color='red' />;
      default:
        return null;
    }
  };

  const renderComputerChoiceIcon = () => {
    switch (computerChoice) {
      case 'rock':
        return <FaHandRock size={60} color='grey' />;
      case 'paper':
        return <FaHandPaper size={60} color='orange' />;
      case 'scissors':
        return <FaHandScissors size={60} color='red' />;
      default:
        return null;
    }
  };


  return (
    <center>
    <div className="center4">
        <br></br>
      <h1 style={{color:"white"}}>Rock Paper Scissors</h1>
      <br></br>
      <div className="container4">
      <div className="me4">
                <div className="t4">You</div>    
                <div className='action4'>
                {renderPlayerChoiceIcon()}
                </div>   
      </div>
      <div className="me4">
        <div className="t4">Computer</div>
        <div className='action4'>
            {renderComputerChoiceIcon()}
                </div>
    </div>
    </div>
       <div className='button4'>
        <div className="choice" onClick={() => handlePlayerChoice('rock')}>
          <FaHandRock size={40} color='grey' />
        </div>
        <div className="choice" onClick={() => handlePlayerChoice('paper')}>
          <FaHandPaper size={40} color='orange' />
        </div>
        <div className="choice" onClick={() => handlePlayerChoice('scissors')}>
          <FaHandScissors size={40} color='red' />
        </div>
        </div>
     
      
      <div className="result4">
        {playerChoice && computerChoice && (
          <div>
            <p>Your choice: {playerChoice}</p>
            <p>Computer's choice: {computerChoice}</p>
            <p className='win4'>{result}</p>
          </div>
        )}
      </div>
    </div>
    </center>
  );
}

export default RockPaperScissors;
