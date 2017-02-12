import React, { Component } from 'react';

class ReportSelect extends Component {
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
        return (
            <div className={ 'dropdown' + ( this.state.open ? ' open' : '' ) }>
                <button className="btn btn-primary dropdown-toggle" type="button" onClick={this.open.bind( this )}>
                    <i className="fa fa-calendar"/> {this.props.value} <span className="caret"/>
                </button>
                <ul className="dropdown-menu">
                    {
                        this.props.reports.map( ( report ) => {
                            return (
                                <li>
                                    <a href="#" onClick={this.onChange.bind( this, report.dateRange )} ><i className="fa fa-calendar"/> {report.dateRange} </a>
                                </li>
                            );
                        }, this )
                    }
                </ul>
            </div>
        )
    }
}

class Sidebar extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            dateRange: '2016/02/01 - 2016/02/28',
            reports: [
                {
                    dateRange: '2016/02/01 - 2016/02/28'
                },
                {
                    dateRange: '2016/03/01 - 2016/03/30'
                },
                {
                    dateRange: '2016/04/01 - 2016/04/30'
                }
            ],
            filters: this.props.filters
        };
    }
    onReportChange ( value ) {
        this.setState( { dateRange: value } );
    }
    onChange( type, e ) {
        let _filters = this.props.filters;

        if ( e.target.checked ) {
            _filters[ type ].push( e.target.value );
        } else {
            _filters[ type ].splice( _filters[ type ].indexOf( e.target.value ), 1 );
        }
        this.setState( { filters: _filters } );
        // this.props.onChange( _filters );
    }
    onSubmit() {
        this.props.onChange( this.state.filters );
    }
    render () {
        return (
            <div>
                <ul className="nav nav-sidebar">
                    <li>
                        <h4>Pick a Period
                            <span className="pull-right">
                                <button type="button" className="btn btn-default btn-sm" onClick={this.onSubmit.bind(this)}>Submit</button>
                            </span>
                        </h4>
                    </li>
                    <li><hr /> </li>
                    <li>
                        <ReportSelect reports={this.state.reports} value={this.state.dateRange} onChange={this.onReportChange.bind( this )} />
                    </li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li><hr /> </li>
                    <li>
                        <h4>Customer type
                            <span className="pull-right blue-botton">
                                <a href="#">All</a> | <a href="#">None</a>
                            </span>
                        </h4>
                    </li>
                    {
                        [ 'loyal', 'mixed', 'dynamic' ].map( function ( type ) {
                            let _label = { 'loyal': 'Loyal', 'mixed': 'Mixed', 'dynamic': 'Dynamic' };
                            return (
                                <li>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value={type} onChange={this.onChange.bind( this, 'customers' )} />{_label[ type ]}</label>
                                    </div>
                                </li>
                            )
                        }, this )
                    }
                </ul>
                <ul className="nav nav-sidebar">
                    <li><hr /> </li>
                    <li>
                        <h4>Age
                            <span className="pull-right blue-botton">
                                <a href="#">All</a> | <a href="#">None</a>
                            </span>
                        </h4>
                    </li>
                    {
                        [ '18-24', '25-34', '35-44', '45-54', '55-64', '65' ].map( function ( ageRange ) {
                            return (
                                <li>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value={ageRange} onChange={this.onChange.bind( this, 'ages' )} />{ageRange}</label>
                                    </div>
                                </li>
                            );
                        }, this )
                    }
                </ul>
                <ul className="nav nav-sidebar">
                    <li><hr /> </li>
                    <li>
                        <h4>Gender
                            <span className="pull-right blue-botton">
                                <a href="#">All</a> | <a href="#">None</a>
                            </span>
                        </h4>
                    </li>
                    {
                        [ 'male', 'female' ].map( function ( gender ) {
                            return (
                                <li>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value={gender} onChange={this.onChange.bind( this, 'genders' )} /> {gender}</label>
                                    </div>
                                </li>
                            )
                        }, this )
                    }
                </ul>
                <ul className="nav nav-sidebar">
                    <li>
                        <hr /> </li>
                    <li>
                        <h4>Avg Balance
                            <span className="pull-right blue-botton">
                                <a href="#">All</a> | <a href="#">None</a>
                            </span>
                        </h4>
                    </li>
                    {
                        [ '<1k', '1k-2.5k', '2.6-4k', '4.1-6k', '6.1k-10k', '10.1k+' ].map( function ( range ) {
                            return (
                                <li>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value={range} onChange={this.onChange.bind( this, 'averageBalance' )} />{range}</label>
                                    </div>
                                </li>
                            )
                        }, this )
                    }
                </ul>
            </div>
        )
    }
}

export default Sidebar;