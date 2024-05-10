import React, { useState } from 'react';
import "./Mld.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyLuckyDay() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [luckyDay, setLuckyDay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const daysInMonth = new Date(year, month, 0).getDate();
    const randomDay = Math.floor(Math.random() * daysInMonth) + 1;

    
    const randomDate = new Date(year, month - 1, randomDay);
    const options = { weekday: 'long' };
    const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(randomDate);

    
    setLuckyDay(`${dayOfWeek}, ${randomDate.toDateString()}`);
  };

  return (
    <center>
    <div className='center6'>
        <br></br>
      <h2 style={{color:'white'}}>My Lucky Day</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className='containerr6'>
        <label className='label6'>
          Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required  />
        
        </div>
        <br></br>
       <div className='containerr6'>
        <label className='label6'>
          Date of Birth:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}  required/>
        
        </div>
        <br />
        <div className='containerr6'>
        <label className='label6'>
          Month: </label>
          <input type="number" min="1" max="12" value={month} onChange={(e) => setMonth(e.target.value)} required/>
       
        </div>
        <br />
        <div className='containerr6'>        
        <label className='label6'>
          Year:</label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
  
        </div>

        <br />
        <button type="submit" className="btn btn-outline-primary">Find My Lucky Day</button>
      </form>
      <br></br>
      {luckyDay && <p className='outputm6'>Your lucky day is: {luckyDay}</p>}
    </div>
    </center>
  );
}

export default MyLuckyDay;
