import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
    return(
    <div>
        <h2>My work</h2>
        <ul>
            <li><Link to="/portfolio/1">Portfolio 1</Link></li>
            <li><Link to="/portfolio/2">Portfolio 2</Link></li>
            <li><Link to="/portfolio/3">Portfolio 3</Link></li>
        </ul>

    </div>
    );   
};

export default PortfolioPage;