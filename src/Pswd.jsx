import "bootstrap/dist/css/bootstrap.min.css";
import "./Pswd.css";
import { useState } from "react";

 function Pswd(){

    const [password, setPassword] = useState('');
    const [length, setLength] = useState(5);

    const generatePassword = () => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]|:;"\'<>,.?/~';
        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * charset.length);
            newPassword += charset[index];
        }
        setPassword(newPassword);
    };

    const copy = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };
 
    return (
      
        <center>
              <br></br>
      <div className="container3">
        
            <br></br>
            <h2 style={{color:"white"}}>Password Generator</h2>
            <br></br>
            <div className="password3">
                <input type="text" value={password} placeholder="Click Generate Plz" autoComplete="off"/> 
                <button type="button" class="btn btn-outline-success" onClick={copy}>Copy text</button>
            </div>
            <br />
            <div className="length-box3">
                <div>
                    <label className="label3">Password Length</label>
                </div>
                <div>
                    <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))}  />
                </div>
            </div>
            
      </div>
      <br></br>
    <button type="button" className="btn btn-outline-primary" onClick={generatePassword}>Generate</button>
      </center>
    );
  
}
export default Pswd;