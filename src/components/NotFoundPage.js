import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <p>404 ! Page Not NotFound</p>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFoundPage;