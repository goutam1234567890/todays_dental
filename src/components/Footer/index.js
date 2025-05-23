import react from 'react'
import './index.css'

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer-container'>
                <p>&copy; {new Date().getFullYear()} Todays Dental Services. All rights reserved.</p>
                <div className='footer-links'>
                    <a href="#">privacy Policy</a>
                    <a href='#'>Terms & conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
