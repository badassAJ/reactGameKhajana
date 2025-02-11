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



function App(){
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameSelection = (game) => {
    setSelectedGame(game);
  };

  return (
    <center>
   style={{
          backgroundImage: `url('/back.png')`,
          backgroundSize: "cover"
          
        }}
    <div className="container">
      <AppName></AppName>
      <div className="game-list">
        
          <button type="button" class="btn btn-warning" onClick={() => handleGameSelection('RollYourDice')}>Roll Your Dice</button>
          <button type="button" class="btn btn-warning" onClick={() => handleGameSelection('OtpGenerator')}>Otp Generator</button>
          <button type="button" class="btn btn-warning" onClick={() => handleGameSelection('PasswordGenerator')}>Password Generator</button>
          <button type="button" class="btn btn-warning" onClick={() => handleGameSelection('RockPaperScissors')}>RockPaperScissors</button>
          <button type="button" class="btn btn-warning" onClick={() => handleGameSelection('TodayMenu')}>Today's Menu</button>
          <button type="button" class="btn btn-warning" onClick={() => handleGameSelection('MyLuckyDay')}>My Lucky Day</button>
          <button type="button" class="btn btn-warning" onClick={() => handleGameSelection('MatchMaking')}>Match-Making</button>
          <button type="button" class="btn btn-warning" onClick={() => handleGameSelection('KnowYourGender')}>Know Your Gender</button>         
        
      </div>
      {selectedGame && (
        <div className="selected-game">
          {renderSelectedGame(selectedGame)}
        </div>
      )}
    </div>

 
    </center>
  );
};

const renderSelectedGame = (selectedGame) => {
  switch (selectedGame) {
    case 'RollYourDice':
      return <Roll></Roll>;
    case 'OtpGenerator':
      return <Otp></Otp>;
    case 'PasswordGenerator':
      return <Pswd></Pswd>;
    case 'RockPaperScissors':
      return <RockPaperScissors></RockPaperScissors>;
    case 'TodayMenu':
      return <TodayMenu></TodayMenu>
    case 'MyLuckyDay':
      return <MyLuckyDay></MyLuckyDay>;
    case 'MatchMaking':
      return <MatchMaking></MatchMaking>;
    case 'KnowYourGender':
      return <KnowYourGender></KnowYourGender>;
    default:
      return null;
  }
};

export default App;
