import React, { useState } from 'react';
import './Fees.css';

function Fees() {
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [feesAmount, setFeesAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server or perform other actions here
  };

  return (
    <div>
      <h2>College Fees Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(event) => setCourseName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="feesAmount">Fees Amount:</label>
          <input
            type="number"
            id="feesAmount"
            value={feesAmount}
            onChange={(event) => setFeesAmount(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Fees;

