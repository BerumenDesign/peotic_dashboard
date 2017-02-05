import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GoogleMap from './components/GoogleMap';
import Highcharts from 'highcharts';

class App extends Component {
    render () {
        return (
            <div className="container-fluid">
                <Navbar />
                <div className="row">
                    <div className="col-sm-3 col-md-2 sidebar">
                        <Sidebar />
                    </div>

                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main main-dashboard">
                        <Dashboard />
                    </div>
                </div>
            </div>
        )
    }
}

class Dashboard extends Component {
    render () {
        return (
            <div>
                <h1>Wallet Share Dashboard</h1>

                <div className="row placeholders">
                    <div className="col-xs-6 col-sm-8 map">
                        <GoogleMap />
                    </div>
                    <div className="col-xs-6 col-sm-4 placeholder blue-panel">
                        <StoreList />
                    </div>
                </div>
            </div>
        )
    }
}

class StoreList extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            stores: [{"name":"A0001 Eglinton Ave"},{"name":"A0002 York Mills Rd"},{"name":"A0003 King Street"},{"name":"A0004 St Claire Ave"},{"name":"A0005 Weston Road"},{"name":"A0006 Dupont Street"},{"name":"A0007 Leslie Street"},{"name":"A0008 Danforth Ave"},{"name":"A0009 Blood Street"},{"name":"A00010 Wright Ave"}]
        };
    }
    render () {
        return (
            <div className="select-store">
                <ul>
                    {
                        this.state.stores.map( function ( store ) {
                            return (
                                <li>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" value="" />{store.name}
                                        </label>
                                    </div>
                                </li>
                            )
                        } )
                    }
                </ul>
            </div>
        )
    }
}

class DonutChart extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            config: {
                chart: {
                    renderTo: 'Loyalty',
                    type: 'pie'
                },
                title: {
                    text: 'Loyalty'
                },
                legend: {
                    labelFormat: '{percentage:.1f}% {name}'
                },
                tooltip: {
                    pointFormat: '<b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        innerSize: '85%',
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [
                    {
                        data: [
                            [ 'Loyal', 29 ],
                            [ 'Mixed', 40 ],
                            [ 'Dynamic', 31 ]
                        ]
                    }
                ]
            }
        };
    }
    componentDidMount () {

    }
    render () {
        return (
            <div></div>
        )
    }
}

export default App;