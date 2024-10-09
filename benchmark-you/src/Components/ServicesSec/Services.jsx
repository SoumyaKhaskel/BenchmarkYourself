import React from 'react'
import { Link } from 'react-router-dom';
import './Services.css'
import serviceData from './ServiceData';

const ServiceBox = ({ iconClass, title, description, url}) => {
    return (
        <div className='service-box'>
            <Link to={url} className='service-card' style={{ textAlign: 'center', position: 'relative' }}>
                <div className={iconClass} style={{ fontSize: '70px' }}></div>
                <h2>{title}</h2>
                <p>{description}</p>
            </Link>
        </div>
    );
};

const Services = () => {
    return (
        <div className='g-back'>
            <div className='g-box'>
                {serviceData.map(service => (
                    <ServiceBox 
                        key={service.id}
                        iconClass={service.iconClass} 
                        title={service.title} 
                        description={service.description}
                        url={service.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;