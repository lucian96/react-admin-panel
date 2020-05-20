import React from 'react';
import '../components/Navbar.css';


function Navbar(props) {

    return(
            <div id="navbar" className="navbar navbar-expand-lg">
                {props.children}
            </div>
    )
}

export default Navbar;