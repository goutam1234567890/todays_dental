import React, { useState } from 'react';
import './index.css';

const services = [
  {
    title: 'Dental Cleaning',
    description: 'Professional plaque and tartar removal for healthy teeth.',
    details: 'Performed by skilled hygienists using modern tools to prevent gum disease.'
  },
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile with safe in-office treatments.',
    details: 'Using peroxide-based gels, our whitening is quick and long-lasting.'
  },
  {
    title: 'Braces & Aligners',
    description: 'Straighten teeth with metal braces or clear aligners.',
    details: 'We offer Invisalign and traditional options for all ages.'
  },
  {
    title: 'Root Canal Therapy',
    description: 'Save damaged teeth with expert endodontic care.',
    details: 'Minimally invasive and virtually painless procedures.'
  },
  {
    title: 'Tooth Extraction',
    description: 'Safe and comfortable removal of problematic teeth.',
    details: 'Wisdom teeth and damaged teeth are extracted with care.'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent tooth replacement for a confident smile.',
    details: 'Titanium-based implants placed surgically and restored with crowns.'
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="services-page">
      <h2>Our Dental Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-header" onClick={() => toggleExpand(index)}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            {expandedIndex === index && (
              <div className="service-details">
                <p>{service.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
