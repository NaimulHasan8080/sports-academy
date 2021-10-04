import React, { useEffect, useState } from 'react';
import ServicesSports from '../../Components/servicesSports/ServicesSports';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`./sports.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className="service">
                {
                    services.map(service => <ServicesSports
                        key={service.title}
                        service={service}></ServicesSports>)
                }
            </div>
        </div>
    );
};

export default Services;