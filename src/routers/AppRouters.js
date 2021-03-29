import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import portfolio from '../components/PortfolioPage';
import contactUs from '../components/ContactUs';
import PortfolioItem from '../components/PortfolioItemPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouters = () => {
    return (
        <BrowserRouter>
        <div>
            <Header/>
        </div>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItem} />
                <Route path="/contactUs" component={contactUs} />
                <Route path="/portfolio" component={portfolio} exact={true}s/>
                <Route component = {NotFoundPage} />
            </Switch>
        </div>        
        </BrowserRouter>
    ); 
};

export default AppRouters;