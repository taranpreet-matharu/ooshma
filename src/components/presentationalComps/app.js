import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar.js';
import {Home} from './Home.js';
import {AboutUs} from './AboutUs.js';
import {Benefits} from './Benefits.js';
import {HowSolarWorks} from './HowSolarWorks.js';
import {Partners} from './Partners.js';
import {ContactUs} from './ContactUs.js';
import {Footer} from './Footer.js';

function App(props) {
    return(
        <React.Fragment>
            <NavBar></NavBar>
            <Home></Home>
            <AboutUs></AboutUs>
            <Benefits></Benefits>
            <HowSolarWorks></HowSolarWorks>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </React.Fragment>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);