import React from "react";
import './index.css'
import { Link } from 'react-router-dom'

const dentalBanner = "https://res.cloudinary.com/dqhagljvz/image/upload/v1747912467/ChatGPT_Image_May_22_2025_04_43_12_PM_aei0m8.png"

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Your Smile, Our Priority</h1>
                    <p>Welcome to Todays Dental - compassionate dental care you can trust.</p>
                    <Link to='/contact' className="hero-btn">Book Appointment</Link>
                </div>
                <img src={dentalBanner} alt="Dental care banner" className="hero-image" />
            </section>

            {/*Clinic Introduction */}
            <section className="intro-section">
                <h2>About Our Clinic</h2>
                <p>
                    At Todays Dental Services, we combine modern dental technology with genuine care to ensure your comfort and satisfaction.
                    Our experienced team provides a wide range of treatments from routine cleanings to cosmetic makeovers.
                </p>
            </section>

            <section className="services-preview">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service-item">🪥 Cleaning</div>
                    <div className="service-item">😁 Whitening</div>
                    <div className="service-item">🦷 Braces</div>
                    <div className="service-item">🛡️ Root Canal</div>
                    <div className="service-item">🧵 Fillings</div>
                    <div className="service-item">📸 X-Rays</div>
                </div>
                <Link to="/service" className="learn-more"></Link>
            </section>
        </div>
    )
};

export default Home;
