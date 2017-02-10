import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GoogleMap from './components/GoogleMap';
import Highcharts from 'highcharts';
import _ from 'underscore';
import DataStore from './stores/DataStore';

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
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <p>© Copyright Peotic Inc. 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Dashboard extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            data: DataStore.get(),
            filters: {
                stores: []
            }
        };
    }
    getLoyaltyData () {
        let data = {
            loyal: 0,
            mix: 0,
            dynamic: 0
        };

        this.state.data.stores
                .filter( ( store ) => { return this.state.filters.stores.indexOf( store.id ) !== -1; }, this )
                .forEach( ( store ) => {
                    data.loyal += store.loyalty.loyal;
                    data.mix += store.loyalty.mix;
                    data.dynamic += store.loyalty.dynamic;
                } );

        return [
            {
                data: [
                    [ 'Loyal', ( data.loyal / ( this.state.data.stores.length - 1 ) ) ],
                    [ 'Mixed', ( data.mix / ( this.state.data.stores.length - 1 ) ) ],
                    [ 'Dynamic', ( data.dynamic / ( this.state.data.stores.length - 1 ) ) ]
                ]
            }
        ];
    }
    getLoyaltyTransactions () {
        let data = {
            loyal: {
                transactions: 0,
                total: 0
            },
            mixed: {
                transactions: 0,
                total: 0
            },
            dynamic: {
                transactions: 0,
                total: 0
            }
        };

        this.state.data.stores
            .filter( ( store ) => { return this.state.filters.stores.indexOf( store.id ) !== -1; }, this )
            .forEach( ( store ) => {
                data.loyal.transactions += ( store.transactions * ( store.loyalty.loyal / 100 ) );
                data.loyal.total = ( store.sales * ( store.loyalty.loyal / 100 ) );

                data.mixed.transactions += ( store.transactions * ( store.loyalty.mix / 100 ) );
                data.mixed.total = ( store.sales * ( store.loyalty.mix / 100 ) );

                data.dynamic.transactions += ( store.transactions * ( store.loyalty.dynamic / 100 ) );
                data.dynamic.total = ( store.sales * ( store.loyalty.dynamic / 100 ) );
            } );

        console.log( 'getLoyaltyTransactions', data );

        return data;

    }
    onFilterChange ( filter, value ) {
        let _filters = this.state.filters;
        _filters[ filter ] = value;
        this.setState( { filters: _filters } );
    }
    render () {

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

        // let our_transaction_data = {
        //     loyal: {
        //         transactions: 160171,
        //         total: 4952507
        //     },
        //     mixed: {
        //         transactions: 249240,
        //         total: 6778693
        //     },
        //     dynamic: {
        //         transactions: 160786,
        //         total: 4965322
        //     }
        // };

        let competition_transaction_data = {
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
        };

        let transaction_colorMap = {
            'loyal': 'blue',
            'mixed': 'yellow',
            'dynamic': 'black'
        };

        let our_gender_ratio_series = [
            {
                data: [ [ 'Female', 29 ], [ 'Male', 40 ] ]
            }
        ];

        let our_gender_color = [ '#26a7de', '#aaaaaa' ];

        let competition_gender_ratio_series = [
            {
                data: [ [ 'Female', 29 ], [ 'Male', 40 ] ]
            }
        ];

        let competition_gender_color = [ '#333', '#aaa' ];

        let our_avg_transaction_type_series = [
            {
                name: 'You',
                data: [ 35 ],
                color: '#2da4db'
            },
            {
                name: 'Competition',
                data: [ 42 ],
                color: '#333333'
            }
        ];

        let avg_transaction_categories = [ 'Avg. Transaction Type' ];

        let avg_daily_balance_series = [
            {
                name: 'Average Daily Balance',
                data: [ 22, 25, 16, 14, 12, 11 ],
                color: '#2da4db'
            }
        ];

        let avg_daily_balance_categories = [ '<1k', '$1.1k-$2.5K', '$2.6-$4K', '$4.1-$6K', '$6.1k-$10K', '$10.1k+' ];

        let postal_code_sales_series = [
            {
                name: 'Sales',
                data: [ 850000, 730000, 710000, 650000, 620000, 580000, 540000, 340000 ],
                color:'#29aae0'
            }
        ];

        let postal_code_categories = [ 'M6H', 'M6P', 'M6K', 'M6J', 'M6R', 'M4B', 'M6N', 'M6G', 'M4C', 'M1L' ];

        let customer_age_percent_series = [
            {
                name: 'You',
                data: [ 60, 30, 45, 56, 40, 20 ],
                color: '#29a3db'
            },
            {
                name: 'Competition',
                data: [ 40, 70, 55, 44, 60, 80 ],
                color: '#333'
            }
        ];

        let customer_age_percent_categories = [ '18-24', '25-34', '35-44', '45-54', '55-64','65+' ];

        if ( !this.state.data ) { return null; }

        return (
            <div>
                <h1>Wallet Share Dashboard</h1>

                <div className="row placeholders">
                    <div className="col-xs-6 col-sm-8 map">
                        <GoogleMap />
                    </div>
                    <div className="col-xs-6 col-sm-4 placeholder blue-panel">
                        <StoreList stores={this.state.data.stores} onChange={this.onFilterChange.bind( this, 'stores' )} />
                    </div>
                </div>

                <div className="row placeholders">
                    <div className="col-xs-6 col-sm-3 white-panel">
                        <DonutChart id="_loyalty_" title="Loyalty" series={this.getLoyaltyData()} colors={[ '#25a7de', '#df9a27', '#212334' ]} />
                    </div>
                    <div className="col-xs-6 col-sm-3 white-panel">
                        <DonutChart id="_wallet_share_" title="Wallet Share" series={wallet_series} colors={[ '#25a7de', '#df9a27', '#212334' ]} />
                    </div>
                    <div className="col-xs-6 col-sm-6 white-panel">
                        <ColumnChart id="_wallet_by_competitor_" title="Wallet Share By Competitor" series={wallet_by_competitor_series} categories={wallet_by_competitor_categories} />
                    </div>
                </div>

                <div className="row placeholders blue-panel">
                    <h4>Transactions</h4>
                    <div className="col-xs-12 col-sm-6">
                        <TransactionsTable title="YOU" data={this.getLoyaltyTransactions()} colorMap={transaction_colorMap} />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <TransactionsTable title="COMPETITOR" data={competition_transaction_data} colorMap={transaction_colorMap} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-4 white-panel">
                        <h4 className="center-text">Gender Ratio</h4>
                        <div className="col-xs-6">
                            <DonutChart id="_gender_ratio_our" height="200px" title="You" series={our_gender_ratio_series} colors={our_gender_color} />
                        </div>
                        <div className="col-xs-6">
                            <DonutChart id="_gender_ratio_competition" height="200px" title="Competition" series={competition_gender_ratio_series} colors={competition_gender_color} />
                        </div>
                    </div>

                    <div className="col-xs-6 col-sm-4 white-panel">
                        <ColumnChart id="_avg_transaction_type_" height="240px" title="Average Transaction Type" series={our_avg_transaction_type_series} categories={avg_transaction_categories} />
                    </div>

                    <div className="col-xs-6 col-sm-4 white-panel">
                        <LineChart id="_avg_daily_balance_" title="Avg. Daily Balance" series={avg_daily_balance_series} categories={avg_daily_balance_categories} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6 col-sm-7 white-panel">
                        <ColumnChart id="_sales_by_postal_codes_" title="Top Postal Codes Sales" series={postal_code_sales_series} categories={postal_code_categories} />
                    </div>

                    <div className="col-xs-6 col-sm-5 white-panel">
                        <ColumnChart id="_customer_age_percent_" title="Customer Age %" series={customer_age_percent_series} categories={customer_age_percent_categories} />
                    </div>
                </div>
            </div>
        )
    }
}

class TransactionsTable extends Component {
    constructor ( props ) {
        super( props );
        this.state = {};
    }
    render () {
        console.log( 'TransactionsTable.render', this.props );
        return (
            <div>
                <table style={{width: '100%', border: '0', cellspacing: '0', cellpadding: '0'}} className="table-transactions">
                    <tbody>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td className="table-tab"><i className="fa fa-circle blue"/> {this.props.title}</td>
                        </tr>
                        <tr>
                            {
                                _.map( this.props.data, function ( data, type ) {
                                    return (
                                        <td className={ 'table-transactions-left ' + this.props.colorMap[ type ] }> {data.transactions.toLocaleString()} <span className="label-txnsm black">txns</span> </td>
                                    )
                                }, this )
                            }
                        </tr>
                        <tr>
                            {
                                _.map( this.props.data, function ( data, type ) {
                                    return (
                                        <td className={ 'table-transactions-left ' + this.props.colorMap[ type ] + '-border' }>
                                            <span className="label-txns black">
                                                <i className={ 'fa fa-shopping-cart ' + this.props.colorMap[ type ] }/> {data.total.toLocaleString( 'en-US', { style: 'currency', currency: 'USD' } )}
                                            </span>
                                        </td>
                                    )
                                }, this )
                            }
                        </tr>
                        <tr>
                            {
                                Object.keys( this.props.data ).map( function ( type ) {
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
            list: []
        };
    }
    onChange ( e ) {
        let _list = this.state.list;
        let index = _list.indexOf( e.target.value );
        if ( index !== -1 ) {
            _list.splice( index, 1 );
        } else {
            _list.push( e.target.value );
        }
        this.setState( { list: _list } );
        this.props.onChange( _list );
    }
    render () {
        console.log( 'StoreList: ', this.props );
        return (
            <div className="select-store">
                <ul>
                    {
                        this.props.stores.map( function ( store ) {
                            return (
                                <li>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" value={store.id} onChange={this.onChange.bind( this )} />{store.name}
                                        </label>
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

class LineChart extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            config: {
                chart: {
                    type: 'line',
                    renderTo: '_chart_' + this.props.id
                },
                title: {
                    text: this.props.title
                },
                xAxis: {
                    categories: this.props.categories
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Units'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} units</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: this.props.series
            }
        };
    }
    componentDidMount () {
        let _chart = new Highcharts.Chart( this.state.config );
    }
    render () {
        return (
            <div id={ '_chart_' + this.props.id } style={{height: this.props.height || '240px', margin: '0 auto' }}></div>
        )
    }
}

class DonutChart extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            config: this.setConfig( props ),
            chart: {}
        };
    }
    setConfig ( props ) {
        return {
            chart: {
                renderTo: '_chart_' + props.id,
                type: 'pie'
            },
            title: {
                text: props.title
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
            series: props.series
        };
    }
    componentWillReceiveProps ( props ) {
        this.chart.series[ 0 ].setData( props.series[ 0 ].data );
    }
    componentDidMount () {
        this.renderChart();
    }
    renderChart () {
        Highcharts.setOptions( {
            colors: this.props.colors
        } );

        this.chart = new Highcharts.Chart( this.state.config );
    }
    render () {
        return (
            <div id={'_chart_' + this.props.id} style={{height: this.props.height || '300px', margin: '0 auto'}}></div>
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
            <div id={'_chart_' + this.props.id} style={{height: this.props.height || '300px', margin: '0 auto'}}></div>
        )
    }
}

export default App;