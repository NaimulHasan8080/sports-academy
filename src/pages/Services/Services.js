import React, { useEffect, useState } from 'react';
import ServicesSports from '../../Components/servicesSports/ServicesSports';

const Services = () => {
    const [sports, setSports] = useState();
    useEffect(() => {
        fetch(`./sports.json`)
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
            {
                sports.map(servicesSports => <ServicesSports servicesSports={servicesSports}></ServicesSports>)
            }
        </div>
    );
};

export default Services;