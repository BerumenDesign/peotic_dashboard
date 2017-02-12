import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GoogleMap from './components/GoogleMap';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import StoreList from './components/StoreList';

import _ from 'underscore';

import DataStore from './stores/DataStore';

class App extends Component {
    constructor ( props ) {
        super( props );
        this.state = { login: false, data: DataStore.get(), competition: DataStore.getCompetition(), filters: { stores: [], customers: [], ages: [], genders: [], averageBalance: [] } };
        console.log( 'App.construct.state', this.state );
    }
    onChangeFilters ( filters ) {
        console.log( 'onChangeFilters', filters );
        filters.stores = _.clone( this.state.storeFilters );
        this.setState( { filters: filters, data: this.updateData( DataStore.get() ), competition: this.updateData( DataStore.getCompetition() ) } );
    }
    onChangeFilterStores ( stores ) {
        console.log( 'onChangeFilterStores', stores );
        this.setState( { storeFilters: stores } );
        // let _filters = this.state.filters;
        // _filters.stores = stores;
        // this.setState( { filters: _filters } );
    }
    onLogin () {
        this.setState( { login: true } );
    }
    updateData ( _data ) {
        // let _data = DataStore.get();

        let _stores = _data.stores
            .map( ( store ) => {
                let { id, name, transactions, sales, genderRatio, loyalty, postalCode, coordinates, avgBalance, ages } = store;
                let _types = this.state.filters.customers;
                let _percentage = 0;
                let _loyalty = {};
                let _transactionsByType = {};

                _types.forEach( ( type ) => {
                    _transactionsByType[ type ] = ( loyalty[ type ] / 100 ) * transactions;
                    _percentage += loyalty[ type ];
                    _loyalty[ type ] = loyalty[ type ];
                } );

                transactions = ( _percentage / 100 ) * transactions;

                _types.forEach( ( type ) => {
                    _loyalty[ type ] = ( _transactionsByType[ type ] / transactions ) * 100;
                } );

                sales = ( _percentage / 100 ) * sales;

                let res = { id, name, transactions, sales, genderRatio, postalCode, coordinates, avgBalance, ages };
                res.loyalty = _loyalty;
                return res;
            }, this )
            .map( ( store ) => {
                let { id, name, transactions, sales, genderRatio, loyalty, postalCode, coordinates, avgBalance, ages } = store;
                let _genders = this.state.filters.genders;
                let _percentage = 0;
                let _genderRatio = {};
                let _transactionsByGender = {};

                _genders.forEach( ( gender ) => {
                    _transactionsByGender[ gender ] = ( genderRatio[ gender ] / 100 ) * transactions;
                    _percentage += genderRatio[ gender ];
                    _genderRatio[ gender ] = genderRatio[ gender ];
                } );

                transactions = ( _percentage / 100 ) * transactions;

                _genders.forEach( ( gender ) => {
                    _genderRatio[ gender ] = ( _transactionsByGender[ gender ] / transactions ) * 100;
                } );

                sales = ( _percentage / 100 ) * sales;

                let res = { id, name, transactions, sales, loyalty, postalCode, coordinates, avgBalance, ages };
                res.genderRatio = _genderRatio;

                return res;
            }, this )
            .map( ( store ) => {
                let { id, name, transactions, sales, genderRatio, loyalty, postalCode, coordinates, avgBalance, ages } = store;
                let _agesFilter = this.state.filters.ages;
                let _percentage = 0;
                let _transactionsByAge = {};
                let _ages = {};

                _agesFilter.forEach( ( ageRange ) => {
                    _transactionsByAge[ ageRange ] = ( ages[ ageRange ] / 100 ) * transactions;
                    _percentage += ages[ ageRange ];
                    _ages[ ageRange ] = ages[ ageRange ];
                } );

                transactions = ( _percentage / 100 ) * transactions;

                _agesFilter.forEach( ( ageRange ) => {
                    _ages[ ageRange ] = ( _transactionsByAge[ ageRange ] / transactions ) * 100;
                } );

                sales = ( _percentage / 100 ) * sales;

                let res = { id, name, transactions, sales, genderRatio, loyalty, postalCode, coordinates, avgBalance };
                res.ages = _ages;

                return res;
            } )
            .filter( ( store ) => {
                let { avgBalance } = store;

                console.log( 'filter.stores', this.state.filters.averageBalance, store );

                let _match = this.state.filters.averageBalance.filter( ( avg ) => {
                    let avgMap = {
                        '<1k': { min: 0, max: 999 },
                        '1k-2.5k': { min: 1000, max: 2500 },
                        '2.6-4k': { min: 2600, max: 4000 },
                        '4.1-6k': { min: 4100, max: 6000 },
                        '6.1k-10k': { min: 6100, max: 10000 },
                        '10.1k+': { min: 10100, max: 999999 }
                    };

                    console.log( 'avg: ', avg, avgMap[ avg ], avgBalance );

                    return avgBalance > avgMap[ avg ].min && avgBalance < avgMap[ avg ].max;
                } );

                console.log( 'store.filter.match: ', _match );

                return _match.length;
            } );

        console.log( 'updateData.stores: ', _stores );

        return { stores: _stores };
        // this.setState( { data: { stores: _stores } } );
    }
    render () {
        if ( !this.state.login ) {
            return (
                <div>
                    <Login onLogin={this.onLogin.bind( this )} />
                    <footer className="navbar-fixed-bottom footer-bottom">
                        © Copyright Peotic Inc. 2017<br />

                        375 Water Street, Suite 680, Vancouver, BC, V6B 5C6, Canada | <a href="mailto:info@peotic.com">info@peotic.com</a>
                    </footer>
                </div>
            );
        }
        return (
            <div className="container-fluid">
                <Navbar />
                <div className="row">
                    <div className="col-sm-3 col-md-2 sidebar">
                        <Sidebar filters={this.state.filters} onChange={this.onChangeFilters.bind( this )} />
                    </div>

                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main main-dashboard">

                        <h1>Wallet Share Dashboard</h1>

                        <div className="row placeholders">
                            <div className="col-xs-6 col-sm-8 map">
                                <GoogleMap filters={this.state.filters} />
                            </div>
                            <div className="col-xs-6 col-sm-4 placeholder blue-panel" style={{height: '450px'}}>
                                <StoreList stores={this.state.data.stores} onChange={this.onChangeFilterStores.bind( this )} />
                            </div>
                        </div>

                        <Dashboard data={this.state.data} competition={this.state.competition} filters={this.state.filters} />
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

export default App;