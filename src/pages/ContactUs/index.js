import React, { useState } from 'react'
import { sendContactForm } from '../../api/formSubmit';
import './index.css'
// import axios from 'axios'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendContactForm(formData)
            .then(() => {
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch(error => {
                console.error("Form submission failed", error);
            })
    }

    return (
        <div className='contact-us-page'>
            <h2>Contact Us</h2>
            <div className='contact-container'>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <input type='text' name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
                    <input type='email' name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
                    <input type='text' name="subject" placeholder='Subject' value={formData.subject} onChange={handleChange} required />
                    <textarea name="message" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
                    <button type='submit'>Send Message</button>
                    {submitted && <p className='success-msg'>Message sent! We'ii get back to you shortly.</p>}
                </form>

                <div className="clinic-info">
                    <h3>Our Location</h3>
                    <p><strong>Phone:</strong> +91-9876543210</p>
                    <p><strong>Email:</strong> contact@todaysdental.com</p>
                    <p><strong>Address:</strong> 123 Smile Street, Hyderabad, India</p>

                    {/* Google Map Embed */}
                    <div className="map-container">
                        <iframe
                            title="Clinic Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.433462287318!2d78.4741073148763!3d17.385044888081132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97743f9a6d9b%3A0x7ff8c1a4d3136c25!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1628081740910!5m2!1sen!2sin"
                            width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
