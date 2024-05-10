import "bootstrap/dist/css/bootstrap.min.css";
import "./Kyg.css";
import React, { useState } from 'react';

function KnowYourGender() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
        setGender('');
        setError('');
    };

    const checkGender = () => {
        setError('');

        fetch(`https://api.genderize.io?name=${name}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setGender(data.gender);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('An error occurred while fetching data.');
            });
    };

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };


  
    return (
      <div className="wrapper8">
        <h2 style={{color:"white"}}>Know Your Gender</h2>
        <br></br>
        <div className="container8">
            <input type="textbox" placeholder="Enter your name..." value={name} 
                  onChange={handleNameChange} />
            <br></br> <br></br>
            <button type="button" class="btn btn-success" onClick={checkGender}>Know</button>
            <br></br> <br></br> <br></br> <br></br>
            {error && <p className="error8">{error}</p>}
            {gender && <p className="output8">{capitalize(name)}'s gender is {gender}</p>}
    
        </div>
      </div>
    )
  }


export default KnowYourGender;
