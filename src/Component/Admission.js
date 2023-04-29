import React, { useState } from 'react';
import './Admission.css';

function handleImageUpload(event) {
  const imageFile = event.target.files[0];
  const imageElement = document.getElementById('output');
  const previewElement = document.querySelector('.form-group > div');

  const reader = new FileReader();
  reader.onload = (event) => {
    imageElement.src = event.target.result;
    imageElement.style.display = 'block';
    previewElement.style.backgroundImage = `url(${event.target.result})`;
  };
  reader.readAsDataURL(imageFile);
}



function Admission() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [course, setCourse] = useState('');
  const [state, setState] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server
    // You can use an API to send the form data
    // or submit it using a form action
  }

  return (
    <div>
      <h2>Student Admission Form</h2>
      <form onSubmit={handleSubmit}>
      <input type="file" name="image" id="image" onChange={handleImageUpload} className="form-control" 
required accept="image/*" style={{ width: '150px' }} require />
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        
        <label htmlFor="state">State:</label>
        <select id="state" value={state} onChange={(e) => setState(e.target.value)} required>
          <option value="">Select state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />

        <label htmlFor="Pincode"> Pincode:</label>
        <input type="tel" id="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />


        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="phone">Phone No.:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />

        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select category</option>
          <option value="general">General</option>
          <option value="obc">OBC</option>
          <option value="sc">SC</option>
          <option value="st">ST</option>
        </select>


        <label htmlFor="course">Courses:</label>
        <select id="course" value={course} onChange={(e) => setCourse(e.target.value)} required>
          <option value="">Select course</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Electrical and telecommunication">Electrical and telecommunication</option>
          <option value="BCA">BCA</option>
          <option value="BSc IT">BSc IT</option>
          <option value="BSc Agriculture">BSc Agriculture</option>
          <option value="Bachelor of Architecture">Bachelor of Architecture</option>
          <option value="MCA">MCA</option>
          <option value="MSc">MSc</option>
        </select>


        <button type="Student">Submit</button><br></br><br></br>
      </form>
    </div>
  );
}

export default Admission;

