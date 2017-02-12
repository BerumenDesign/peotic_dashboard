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
                            <img src="images/logo_peotic.png" width="120" height="44" alt="" />
                        </a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">
                                    <img className="icons-topnav" src="images/Loblaws_icon.png" />
                                    Loblaws
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img className="icons-topnav" src="images/user_icon.png" />
                                    Abi Rogers
                                </a>
                            </li>
                            <li className="blue_button">
                                <a href="#">Sign Out <i className="fa fa-sign-out"/></a>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <NavDropdown nav={this.props.nav} onChange={this.props.onChange} />
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

class NavDropdown extends Component {
    constructor ( props ) {
        super( props );
        this.state = { open: false };
        this.close = this.close.bind( this );
    }
    onChange ( value ) {
        this.props.onChange( value );
        this.setState( { open: false } );
    }
    componentWillUnmount () {
        document.removeEventListener( 'click', this.close );
    }
    open () {
        this.setState( { open: true } );
        document.addEventListener( 'click', this.close );
    }
    close () {
        document.removeEventListener( 'click', this.close );
        this.setState( { open: false } );
    }
    render () {

        let _label = {
            'wallet': 'Wallet Share',
            'insights': 'Insights'
        };
        return (
            <div className={ 'dropdown' + ( this.state.open ? ' open' : '' ) }>
                <button className="btn btn-primary dropdown-toggle" type="button" onClick={this.open.bind( this )}>
                    <i className="fa fa-credit-card blue-botton blue"/> {_label[this.props.nav]} <span className="caret"/>
                </button>
                <ul className="dropdown-menu">
                    <li><a href="#" className="active" onClick={this.onChange.bind( this, 'wallet')}><i className="fa fa-credit-card blue-botton blue" /> Wallet Share</a></li>
                    <li><a href="#" onClick={this.onChange.bind( this, 'insights' )}><i className="fa fa-bar-chart-o blue-botton blue" /> Insights</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;