// src/components/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 60px;
  background: #111; /* Dark background for high contrast */
  color: #fff; /* White text for readability */
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 36px; /* Larger title for impact */
  margin-bottom: 20px;
  text-transform: uppercase; /* Uppercase for a strong statement */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px; /* Limit form width for better aesthetics */
  margin: 0 auto; /* Center align on larger screens */

  input, textarea {
    width: 100%; /* Full width for better user experience */
    max-width: 400px; /* Limit maximum width for input fields */
    margin: 10px 0;
    padding: 15px; /* More padding for comfort */
    border: 2px solid #3498db; /* Blue accent color */
    border-radius: 8px; /* Rounded corners */
    background: #222; /* Dark background for inputs */
    color: #fff; /* White text in inputs */
    transition: border 0.3s;

    &:focus {
      border-color: #2980b9; /* Darker blue on focus */
      outline: none;
    }
  }

  button {
    padding: 12px 25px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    transition: background 0.3s, transform 0.2s;

    &:hover {
      background: #2980b9;
      transform: translateY(-2px); /* Slight lift on hover */
    }

    &:disabled {
      background: #bdc3c7;
      cursor: not-allowed;
    }
  }
`;

const Message = styled.p`
  margin-top: 20px;
  color: ${({ success }) => (success ? '#2ecc71' : '#e74c3c')}; /* Green for success, red for error */
`;

const LoadingIndicator = styled.div`
  display: ${({ loading }) => (loading ? 'block' : 'none')};
  margin-top: 10px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState({ message: '', success: null });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, message } = formData;

    try {
      const response = await fetch('https://emailbackend-eosin.vercel.app/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage({ message: 'Message sent successfully!', success: true });
        setFormData({ email: '', message: '' });
      } else {
        setStatusMessage({ message: `Error: ${result.error}`, success: false });
      }
    } catch (error) {
      setStatusMessage({ message: 'An error occurred. Please try again.', success: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <Form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </Form>
      {statusMessage.message && <Message success={statusMessage.success}>{statusMessage.message}</Message>}
      <LoadingIndicator loading={loading}>Loading...</LoadingIndicator>
    </ContactContainer>
  );
};

export default Contact;
