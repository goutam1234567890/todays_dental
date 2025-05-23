import React from 'react'
import './index.css'

const AboutUs = () => {
    return (
        <div className='about-us-page'>
            <section className='section'>
                <h2>Our Story</h2>
                <p>
                    Founded in 2010, Todays Dental Services has been providing comprehensive dental care with a focus on patient comfort and trust.
                    Over the years, we’ve helped thousands of patients achieve healthy and confident smiles.
                </p>
            </section>

            <section className='section'>
                <h2>Meet our Lead Dentist</h2>
                <p>
                    <strong>Dr. Sarah Smith, DDS</strong> - a Harvard graduate with over 15 years of experience in general and cosmetic dentistry.
                    Dr. Smith is known for her gentle approach and dedication to excellence in patient care.
                </p>
            </section>

            <section className='section'>
                <h2>Our Mission</h2>
                <p>
                    At Todays Dental, our mission is to make high-quality dental care accessible, affordable, and comfortable.
                    We’re committed to creating a welcoming environment and using modern tools to deliver outstanding results.
                </p>
            </section>
        </div>
    )
};

export default AboutUs;
