import React from 'react';

const PortfolioItem = (props) => { 
    return(
        <div>
            <h2>Things I've Done !</h2>
            <p>ID : {props.match.params.id}</p>
        </div>     
    );    
};

export default PortfolioItem;