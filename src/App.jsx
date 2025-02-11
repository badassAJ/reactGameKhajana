import React, { useState } from 'react';
import './App.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import RockPaperScissors from './RockPaperScissors.jsx';
import MyLuckyDay from './MyLuckyDay.jsx';
import MatchMaking from './MatchMaking.jsx';
import KnowYourGender from './KnowYourGender.jsx';
import TodayMenu from './TodayMenu.jsx';
import Pswd from './Pswd.jsx';
import Roll from './Roll.jsx';
import Otp from './Otp.jsx';
import AppName from './AppName.jsx';

function App() {
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameSelection = (game) => {
    setSelectedGame(game);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/back.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div className="container">
        <AppName />
        <div className="game-list">
          <button type="button" className="btn btn-warning" onClick={() => handleGameSelection('RollYourDice')}>Roll Your Dice</button>
          <button type="button" className="btn btn-warning" onClick={() => handleGameSelection('OtpGenerator')}>Otp Generator</button>
          <button type="button" className="btn btn-warning" onClick={() => handleGameSelection('PasswordGenerator')}>Password Generator</button>
          <button type="button" className="btn btn-warning" onClick={() => handleGameSelection('RockPaperScissors')}>RockPaperScissors</button>
          <button type="button" className="btn btn-warning" onClick={() => handleGameSelection('TodayMenu')}>Today's Menu</button>
          <button type="button" className="btn btn-warning" onClick={() => handleGameSelection('MyLuckyDay')}>My Lucky Day</button>
          <button type="button" className="btn btn-warning" onClick={() => handleGameSelection('MatchMaking')}>Match-Making</button>
          <button type="button" className="btn btn-warning" onClick={() => handleGameSelection('KnowYourGender')}>Know Your Gender</button>         
        </div>
        {selectedGame && (
          <div className="selected-game">
            {renderSelectedGame(selectedGame)}
          </div>
        )}
      </div>
    </div>
  );
}

const renderSelectedGame = (selectedGame) => {
  switch (selectedGame) {
    case 'RollYourDice':
      return <Roll />;
    case 'OtpGenerator':
      return <Otp />;
    case 'PasswordGenerator':
      return <Pswd />;
    case 'RockPaperScissors':
      return <RockPaperScissors />;
    case 'TodayMenu':
      return <TodayMenu />;
    case 'MyLuckyDay':
      return <MyLuckyDay />;
    case 'MatchMaking':
      return <MatchMaking />;
    case 'KnowYourGender':
      return <KnowYourGender />;
    default:
      return null;
  }
};

export default App;
