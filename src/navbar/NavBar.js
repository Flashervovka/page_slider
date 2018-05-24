import React, { Component } from 'react';
import './style.css';

class NavBar extends Component {
    render() {
        return (
            <div className="row navBar mx-0">
                  <div className="col-md-12 px-0">
                      <nav className="navbar navbar-expand py-0 px-0">
                          <div className="col-md-4 px-0">
                              <a className="nav-item nav-link navBarItem navItemFirst px-0" href="#">Navigation</a>
                          </div>
                          <div className="navbar-nav navBarItems px-0 col-md-4 justify-content-md-center">
                              <a className="navBarItem" href="#">Home</a>
                              <a className="navBarItem navBarListItem" href="#">Blog</a>
                              <a className="navBarItem navBarListItem" href="#">Contact</a>
                          </div>
                      </nav>
                  </div>
            </div>

        );
    }
}

export default NavBar;
