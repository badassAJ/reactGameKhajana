import "bootstrap/dist/css/bootstrap.min.css";
import "./Otp.css";
import { useState } from "react";

  function Otp(){

    const [otp, setOtp] = useState('');

    const generateOtp = () => {
             
        const otpLength=6;
        const otp = Math.floor(Math.random() * Math.pow(10,otpLength));
        setOtp(otp.toString());
       
       
    }
  
    return (
      <div>
        <center>
            <div className="container2"> 
            <h1 className="o">OTP Generator</h1>
            <p id="display2">{otp}</p>
             </div>
            <br></br>
            <button type="button" className="btn btn-outline-primary" onClick={generateOtp}>Generate OTP</button>
        </center>
      </div>
    );
     
}
export default Otp;