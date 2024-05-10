import "./roll.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import dice1 from "./pic/1.png";
import dice2 from "./pic/2.png";
import dice3 from "./pic/3.png";
import dice4 from "./pic/4.png";
import dice5 from "./pic/5.png";
import dice6 from "./pic/6.png";

    function Roll(){
  
    var diceImages=[
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
     ]

const [image,setNewImage] = useState(diceImages[0])

const rollDice =() => {
    var randNum = Math.floor((Math.random()*6));
    setNewImage(diceImages[randNum]);
}



    return (
      <div>
        <center>
            <h1>Roll Your Dice</h1>
            <div className="container1">
                <img className="square1" src={image}></img>
            </div>
            <button type="button" className="btn btn-outline-primary" onClick={rollDice}>ROLL</button>
        </center>
      </div>
    )
  
}



export default Roll;