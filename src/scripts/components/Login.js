import React, { Component } from 'react';

class Login extends Component {
    constructor ( props ) {
        super ( props );
        this.state = { error: false, username: '', password: '' }
    }
    login() {
        if ( this.state.username == 'spartan' && this.state.password == 'peotic' ) {
            this.props.onLogin( {success: true });
        } else {
            this.setState( { error: true } );
        }
    }
    onChange ( e ) {
        this.setState( { [ e.target.name ]: e.target.value, error: false } );
    }
    render () {
        return (
            <div className="container">
                <link rel="stylesheet" href="styles/login.css" />
                <div className="row vertical-offset-100">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <img src="images/logo_peotic.png" />
                            </div>
                            <div className="panel-body">
                                <h2>Sign In</h2>
                                <form>
                                    <fieldset>
                                        <div className="form-group">
                                            <h5>
                                                <i className="fa fa-user" /> Username
                                            </h5>
                                            <input type="text" id="username" name="username" className="form-control" onChange={this.onChange.bind( this )} />
                                        </div>
                                        <div className="form-group">
                                            <h5>
                                                <i className="fa fa-key" /> Password
                                            </h5>
                                            <input type="password" id="password" name="password" className="form-control" onChange={this.onChange.bind(this)} />
                                        </div>
                                        <div className="form-group">
                                            <button type="button" className="btn btn-lg btn-block btn-warning" onClick={this.login.bind( this )} >Sign in</button>
                                        </div>
                                        <div className="panel alert alert-error" style={{ display: this.state.error ? 'block': 'none'}}>
                                            <span>
                                                <h5>Try to sign in again,</h5>
                                                <p>The combination of username and password is not in the system.</p>
                                            </span>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;