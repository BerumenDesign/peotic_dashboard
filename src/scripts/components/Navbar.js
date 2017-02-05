import React, { Component } from 'react';

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand">
                            <img src="assets/logo_peotic.png" width="120" height="44" alt="" />
                        </a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">
                                    <img className="icons-topnav" src="assets/Loblaws_icon.png" />
                                    Loblaws
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img className="icons-topnav" src="assets/user_icon.png" />
                                    Abi Rogers
                                </a>
                            </li>
                            <li className="blue_button">
                                <a href="#">Sign Out <i className="fa fa-sign-out"/></a>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button">
                                    <i className="fa fa-credit-card blue-button blue"/>
                                    Wallet Share <span className="caret"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;