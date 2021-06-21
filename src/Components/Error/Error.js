  
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="container  my-5 text-center">
         
            <h2> Opps! Sorry...</h2>
            <hr />
            <h3>404! This page is Not Found</h3>
            <i>Please try Another Items</i>

            <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                    <Link to="/home">Go to Home</Link>
                </Button>
            </div>
      </div>
    );
};

export default Error;