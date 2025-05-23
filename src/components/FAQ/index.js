import React, { useState } from 'react'
import './index.css'

const faqData = [
    {
        question: 'Do you accept insurance?',
        answer: 'Yes, we accept most major insurance providers. Please contact us to confirm your specific plan.',
    },
    {
        question: 'How can I book an appointment?',
        answer: 'You can book an appointment online through our website or call us directly.',
    },
    {
        question: 'What services do you offer?',
        answer: 'We offer general dentistry, cosmetic procedures, orthodontics, and more. Visit our Services page for details.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className='faq-section'>
            <h2 className='faq-title'>Frequently Asked Questions</h2>
            <div className='faq-list'>
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className='faq-question'>{item.question}</div>
                        <div className='faq-answer'>{item.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default FAQ;
