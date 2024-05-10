import "bootstrap/dist/css/bootstrap.min.css";
import "./Tm.css";
import React, { useState } from 'react';
import RC from "./pic2/RC.png";
import CB from "./pic2/CB.png";
import KC from "./pic2/KC.jpeg";
import DM from "./pic2/DM.jpeg";
import Chow from "./pic2/Chow.png";
import pB from "./pic2/pB.jpg";
import PS from "./pic2/PS.png";
import IS from "./pic2/IS.png";
import DS from "./pic2/DS.png";
import VS from "./pic2/VS.jpeg";
import Papu from "./pic2/Papu.jpeg";
import T from "./pic2/T.jpeg";
import Sam from "./pic2/Sam.jpeg";
import pizza from "./pic2/pizza.jpeg";
import PT from "./pic2/PT.png";
import PP from "./pic2/PP.jpeg";




 function TodayMenu(){
     
    const [menu] = useState([
        'Rajma-Chawal', 'Chole-Bhature', 'Kadhi-Chawal', 'DalMakhni-Naan', 'Chowmein', 'Paw-Bhaji', 
        'Puri-Sabji', 'Idli-sambhar', 'Dosa-sambhar', 'Vada-sambhar', 'Pani-puri', 'Tikki', 'Samosa', 
        'Pizza', 'Paneer-Tikka', 'Paalak-Paneer'
    ]);


    const [selectedDinner, setSelectedDinner] = useState('');



    const predictDinner = () => {
        const randomIndex = Math.floor(Math.random() * menu.length);
        setSelectedDinner(menu[randomIndex]);
    }

    function getImage(selectedDinner) {
        switch (selectedDinner) {
            case 'Rajma-Chawal':
                return RC;
            case 'Chole-Bhature':
                return CB;
            case 'Kadhi-Chawal':
                return KC;
            case 'DalMakhni-Naan':
                return DM;
            case 'Chowmein':
                return Chow;
            case 'Paw-Bhaji':
                return pB;
            case 'Puri-Sabji':
                return PS;
            case 'Idli-sambhar':
                return IS;
            case 'Dosa-sambhar':
                return DS;
            case 'Vada-sambhar':
                return VS;
            case 'Pani-puri':
                return Papu;
            case 'Tikki':
                return T;
            case 'Samosa':
                return Sam;
            case 'Pizza':
                return pizza;
            case 'Paneer-Tikka':
                return PT;
            case 'Paalak-Paneer':
                return PP;
            default:
                return null;
        }
    }
    

    return (
      <div className="wrapper5">
        <h2 style={{color:"white"}}>Today's Menu - Dish Prediction</h2>
        <div >
            <br></br>
        <button type="button" class="btn btn-warning" onClick={predictDinner}>Predict Your Choice</button>
        </div>
        <br></br> <br></br>
        <div className="container5">
        <img className="square5" src={getImage(selectedDinner)} alt={selectedDinner} />
        </div>
        <div className="outputcont5">
            <br></br> <br></br>
              <p className="output5">{selectedDinner}</p>
        </div>
      </div>
    )
}

export default TodayMenu;