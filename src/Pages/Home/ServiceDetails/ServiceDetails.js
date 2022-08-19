import React from 'react';
import {Link, useParams} from 'react-router-dom';
const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div>
            this is {serviceId}
            <Link to="/checkout">
            <button className='btn btn-success btn-outline'>Check Out</button>
            
            </Link>
        </div>
    );
};

export default ServiceDetails;