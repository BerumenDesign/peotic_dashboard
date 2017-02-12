import React, { Component } from 'react';
import _ from 'underscore';

import DonutChart from './DonutChart';
import LineChart from './LineChart';
import ColumnChart from './ColumnChart';
import TransactionsTable from './TransactionsTable';

class Dashboard extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            filters: {
                stores: []
            }
        };
    }
    getLoyaltyData () {
        let data = {
            loyal: 0,
            mixed: 0,
            dynamic: 0
        };

        let _stores = this.props.data.stores.filter( ( store ) => { return this.props.filters.stores.indexOf( store.id ) !== -1; }, this );

        _stores.forEach( ( store ) => {
            data.loyal += store.loyalty.loyal;
            data.mixed += store.loyalty.mixed;
            data.dynamic += store.loyalty.dynamic;
        } );

        let res = this.props.filters.customers.map( function ( type ) {
            return [ type, ( data[ type ] / _stores.length ) ];
        } );

        return [
            {
                data: res
            }
        ];
    }
    getLoyaltyTransactions ( stores ) {

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

        stores.filter( ( store ) => { return this.props.filters.stores.indexOf( store.id ) !== -1; }, this )
            .forEach( ( store ) => {
                data.loyal.transactions += ( store.transactions * ( store.loyalty.loyal / 100 ) ) || 0;
                data.loyal.total += ( store.sales * ( store.loyalty.loyal / 100 ) ) || 0;

                data.mixed.transactions += ( store.transactions * ( store.loyalty.mixed / 100 ) ) || 0;
                data.mixed.total += ( store.sales * ( store.loyalty.mixed / 100 ) ) || 0;

                data.dynamic.transactions += ( store.transactions * ( store.loyalty.dynamic / 100 ) ) || 0;
                data.dynamic.total += ( store.sales * ( store.loyalty.dynamic / 100 ) ) || 0;
            }, this );

        return data;

    }
    getGenderRatio ( stores ) {
        let data = {
            female: 0,
            male: 0
        };

        let _stores = stores.filter( ( store ) => { return this.props.filters.stores.indexOf( store.id ) !== -1; }, this );

        _stores.forEach( ( store ) => {
            this.props.filters.genders.forEach( ( gender ) => {
                data[ gender ] += store.genderRatio[ gender ];
            } );
        }, this );

        return [
            {
                data: this.props.filters.genders.map( ( gender ) => {
                    return [ gender, ( data[ gender ] / _stores.length ) ]
                } )
            }
        ];
    }
    getSalesByPostal ( type ) {
        switch ( type ) {
            case 'categories':
                return this.props.data.stores.filter( ( store ) => { return this.props.filters.stores.indexOf( store.id ) !== -1; } ).map( ( store ) => store.postalCode );
            case 'data':
                let _data = this.props.data.stores.filter( ( store ) => { return this.props.filters.stores.indexOf( store.id ) !== -1; } ).map( ( store ) => store.sales );

                return [
                    {
                        name: 'Sales',
                        data: _data,
                        color:'#29aae0'
                    }
                ];
        }
        return [];
    }
    getAgePercentData ( type ) {
        switch ( type ) {
            case 'categories':
                return this.props.filters.ages; //this.props.data.stores.filter( ( store ) => { return this.props.filters.stores.indexOf( store.id ) !== -1; } ).map( ( store ) => Object.keys( store.ages ) );
            case 'data':
                let our_data = this.props.data.stores.filter( ( store ) => { return this.props.filters.stores.indexOf( store.id ) !== -1; } ).map( ( store ) => Object.keys( store.ages ).map( ( k ) => store.ages[ k ] ) );
                // let competition_data = this.props.competition.stores.filter( ( store ) => { return this.props.filters.stores.indexOf( store.id ) !== -1; } ).map( ( store ) => Object.keys( store.ages ).map( ( k ) => store.ages[ k ] ) );
                let competition_src = [40, 70, 55, 44, 60, 80];

                let competition_data = [];
                console.log( 'our_data: ', our_data );

                if ( our_data.length && our_data[ 0 ].length ) {
                    competition_data = [ our_data[ 0 ].map( function ( val, index ) {
                        return competition_src[ index ];
                    } ) ];
                }

                return [
                    {
                        name: 'Sales',
                        data: our_data[ 0 ],
                        color:'#29aae0'
                    },
                    {
                        name: 'Competition',
                        data: competition_data[ 0 ],
                        color: '#333'
                    }
                ];
        }
        return [];
    }
    getAverageDailyBalance () {
        let avgMap = {
            '<1k': { min: 0, max: 999 },
            '1k-2.5k': { min: 1000, max: 2500 },
            '2.6-4k': { min: 2600, max: 4000 },
            '4.1-6k': { min: 4100, max: 6000 },
            '6.1k-10k': { min: 6100, max: 10000 },
            '10.1k+': { min: 10100, max: 999999 }
        };

        let data = {
            '<1k': 0,
            '1k-2.5k': 0,
            '2.6-4k': 0,
            '4.1-6k': 0,
            '6.1k-10k': 0,
            '10.1k+': 0
        };

        this.props.data.stores
            .filter( ( store ) => { return this.props.filters.stores.indexOf( store.id ) !== -1; } )
            .forEach( ( store ) => {
                Object.keys( avgMap ).forEach( ( key ) => {
                    let range = avgMap[ key ];
                    if ( store.avgBalance > range.min && store.avgBalance < range.max ) {
                        data[ key ]++;
                    }
                } );
            } );

        console.log( 'getAverageDailyBalance.data: ', _.values( data ) );
        // data = [ 1200, 2500, 233 ];
        return [ {
            name: 'Average Daily Balance',
            data: _.values( data ),//[ 22, 25, 16, 14, 12, 11 ],
            color: '#2da4db'
        } ];
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

        if ( !this.props.data ) { return null; }

        return (
            <div>

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
                        <TransactionsTable title="YOU" data={this.getLoyaltyTransactions( this.props.data.stores )} colorMap={transaction_colorMap} />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <TransactionsTable title="COMPETITOR" data={competition_transaction_data} colorMap={transaction_colorMap} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-4 white-panel">
                        <h4 className="center-text">Gender Ratio</h4>
                        <div className="col-xs-6">
                            <DonutChart id="_gender_ratio_our" height="200px" title="You" series={this.getGenderRatio( this.props.data.stores )} colors={our_gender_color} />
                        </div>
                        <div className="col-xs-6">
                            <DonutChart id="_gender_ratio_competition" height="200px" title="Competition" series={competition_gender_ratio_series} colors={competition_gender_color} />
                        </div>
                    </div>

                    <div className="col-xs-6 col-sm-4 white-panel">
                        <ColumnChart id="_avg_transaction_type_" height="240px" title="Average Transaction Type" series={our_avg_transaction_type_series} categories={avg_transaction_categories} />
                    </div>

                    <div className="col-xs-6 col-sm-4 white-panel">
                        <LineChart id="_avg_daily_balance_" title="Avg. Daily Balance" series={this.getAverageDailyBalance()} categories={avg_daily_balance_categories} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6 col-sm-7 white-panel">
                        <ColumnChart id="_sales_by_postal_codes_" title="Top Postal Codes Sales" series={this.getSalesByPostal('data')} categories={this.getSalesByPostal('categories')} />
                    </div>

                    <div className="col-xs-6 col-sm-5 white-panel">
                        <ColumnChart id="_customer_age_percent_" title="Customer Age %" series={this.getAgePercentData( 'data' )} categories={this.getAgePercentData( 'categories' )} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;