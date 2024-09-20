import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';

const Paymentform = () => {
  const location = useLocation();
  const { price } = location.state || { price: 0 };

  const [formData, setFormData] = useState({
    nameoncard: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.nameoncard) {
      errors.nameoncard = 'Name  is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.nameoncard)) {
      errors.nameoncard = 'Invalid name';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setSuccessMessage(<h2>'Submited successful!'</h2>);
      setErrors({});
      // Simulate API call with a delay
      setTimeout(() => {
        console.log('Payment data:', formData);
      }, 1000);
    } else {
      setErrors(errors);
      setSuccessMessage('');
    }
  };

  return (
    <>
    <div className="containers">
    <h1 style={{ color: 'orange' }}>Contact us</h1>
      <div className="picture">
        <img src='customer.jpg' alt="Customer" />
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameoncard"><h4>Name :</h4></label>
          <input
            type="text"
            id="nameoncard"
            name="nameoncard"
            value={formData.nameoncard}
            onChange={handleChange}
          />
          {errors.nameoncard && <p className="error">{errors.nameoncard}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email"><h4>Email:</h4></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message"><h4>Message:</h4></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            cols="50"
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
      </div>


      
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Sudheshna Ramanchi.
          Connect with me on<a href="https://www.linkedin.com/in/sudheshna-ramanchi-341363312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="in-icon-.jpg" width={20}></img></a>   <a href="https://github.com/SudheshnaRamanchi"><img src="3291667.png" width={20}></img></a><a href="https://www.instagram.com/sudheshna_rao/?hl=en"><img src="instagram.webp" width={40}></img></a></p>
        
        </div>
      </footer>
    
      </>



  );
};

export default Paymentform;






