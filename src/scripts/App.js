import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GoogleMap from './components/GoogleMap';
import Highcharts from 'highcharts';
import _ from 'underscore';

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
        let loyalty_series = [
            {
                data: [
                    [ 'Loyal', 29 ],
                    [ 'Mixed', 40 ],
                    [ 'Dynamic', 31 ]
                ]
            }
        ];

        let wallet_series = [
            {
                data: [
                    [ 'You', 38 ],
                    [ 'Competitor', 62 ]
                ]
            }
        ];

        let wallet_by_competitor_series = [
            {
                showInLegend: false,
                name: 'Wallet Share',
                data: [ 18, 13, 8, 6 ],
                type: 'column'
            },
            {
                name: 'Wallet Share By Competitor',
                data: [
                    { x: 0, y: 18 },
                    { x: 1, y: 13 },
                    { x: 2, y: 8 },
                    { x: 3, y: 6 }
                ],
                type: 'line'
            }
        ];

        let wallet_by_competitor_categories = [ 'Sobeys', 'Metro', 'Safeway', 'Overwaitea' ];
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

                <div className="row placeholders">
                    <div className="col-xs-6 col-sm-3 white-panel">
                        <DonutChart id="_loyalty_" title="Loyalty" series={loyalty_series} />
                    </div>
                    <div className="col-xs-6 col-sm-3 white-panel">
                        <DonutChart id="_wallet_share_" title="Wallet Share" series={wallet_series} />
                    </div>
                    <div className="col-xs-6 col-sm-6 white-panel">
                        <ColumnChart id="_wallet_by_competitor_" title="Wallet Share By Competitor" series={wallet_by_competitor_series} categories={wallet_by_competitor_categories} />
                    </div>
                </div>

                <div className="row placeholders blue-panel">
                    <h4>Transactions</h4>
                    <div className="col-xs-12 col-sm-6">
                        <TransactionsTable />
                    </div>
                </div>
            </div>
        )
    }
}

class TransactionsTable extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            data: {
                you: {
                    loyal: {
                        transactions: 160171,
                        total: 4952507
                    },
                    mixed: {
                        transactions: 249240,
                        total: 6778693
                    },
                    dynamic: {
                        transactions: 160786,
                        total: 4965322
                    }
                },
                competition: {
                    loyal: {
                        transactions: 235723,
                        total: 7928962
                    },
                    mixed: {
                        transactions: 373113,
                        total: 10879385
                    },
                    dynamic: {
                        transactions: 236183,
                        total: 7943020
                    }
                }
            },
            colorMap: {
                'loyal': 'blue',
                'mixed': 'yellow',
                'dynamic': 'black'
            }
        };
    }
    render () {
        return (
            <div>
                <table style={{width: '100%', border: '0', cellspacing: '0', cellpadding: '0'}} className="table-transactions">
                    <tbody>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td className="table-tab"><i className="fa fa-circle blue"/> YOU</td>
                        </tr>
                        <tr>
                            {
                                _.map( this.state.data.you, function ( data, type ) {
                                    return (
                                        <td className={ 'table-transactions-left ' + this.state.colorMap[ type ] }> {data.transactions.toLocaleString()} <span className="label-txnsm black">txns</span> </td>
                                    )
                                }, this )
                            }
                        </tr>
                        <tr>
                            {
                                _.map( this.state.data.you, function ( data, type ) {
                                    return (
                                        <td className={ 'table-transactions-left ' + this.state.colorMap[ type ] + '-border' }>
                                            <span className="label-txns black">
                                                <i className={ 'fa fa-shopping-cart ' + this.state.colorMap[ type ] }/> {data.total.toLocaleString( 'en-US', { style: 'currency', currency: 'USD' } )}
                                            </span>
                                        </td>
                                    )
                                }, this )
                            }
                        </tr>
                        <tr>
                            {
                                [ 'Loyal', 'Mixed', 'Dynamic' ].map( function ( type ) {
                                    return <td className="table-transactions-kind">{type}</td>
                                } )
                            }
                        </tr>
                    </tbody>
                </table>

                <table style={{width: '100%', border: '0', cellspacing: '0', cellpadding: '0'}} className="table-transactions">
                    <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className="table-tab"><i className="fa fa-circle blue"/> COMPETITION</td>
                    </tr>
                    <tr>
                        {
                            _.map( this.state.data.competition, function ( data, type ) {
                                return (
                                    <td className={ 'table-transactions-left ' + this.state.colorMap[ type ] }> {data.transactions.toLocaleString()} <span className="label-txnsm black">txns</span> </td>
                                )
                            }, this )
                        }
                    </tr>
                    <tr>
                        {
                            _.map( this.state.data.you, function ( data, type ) {
                                return (
                                    <td className={ 'table-transactions-left ' + this.state.colorMap[ type ] + '-border' }>
                                        <span className="label-txns black">
                                            <i className={ 'fa fa-shopping-cart ' + this.state.colorMap[ type ] }/> {data.total.toLocaleString( 'en-US', { style: 'currency', currency: 'USD' } )}
                                        </span>
                                    </td>
                                )
                            }, this )
                        }
                    </tr>
                    <tr>
                        {
                            [ 'Loyal', 'Mixed', 'Dynamic' ].map( function ( type ) {
                                return <td className="table-transactions-kind">{type}</td>
                            } )
                        }
                    </tr>
                    </tbody>
                </table>
            </div>
        );
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
                    renderTo: '_chart_' + this.props.id,
                    type: 'pie'
                },
                title: {
                    text: this.props.title //'Loyalty'
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
                series: this.props.series
            }
        };
    }
    componentDidMount () {
        Highcharts.setOptions( {
            colors: [ '#25a7de', '#df9a27', '#212334' ]
        } );

        let _chart = new Highcharts.Chart( this.state.config );
    }
    render () {
        return (
            <div id={'_chart_' + this.props.id} style={{height: '300px', margin: '0 auto'}}></div>
        )
    }
}

class ColumnChart extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            config: {
                chart: {
                    renderTo: '_chart_' + this.props.id,
                    type: 'column'
                },
                title: {
                    text: this.props.title
                },
                xAxis: {
                    categories: this.props.categories
                },
                yAxis: {
                    title: {
                        text: 'Values'
                    }
                },
                series: this.props.series
            }
        }
    }
    componentDidMount () {
        let _chart = new Highcharts.Chart( this.state.config );
    }
    render () {
        return (
            <div id={'_chart_' + this.props.id} style={{height: '300px', margin: '0 auto'}}></div>
        )
    }
}

export default App;