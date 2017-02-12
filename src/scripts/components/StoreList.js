import React, { Component } from 'react';
import DataStore from '../stores/DataStore';

class StoreList extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            stores: DataStore.get().stores,
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
    all () {
        let _list = this.state.stores.map( ( store ) => store.id );
        this.setState( { list: _list } );
        this.props.onChange( _list );
    }
    none () {
        this.setState( { list: [] } );
        this.props.onChange( [] );
    }
    isChecked ( id ) {
        return this.state.list.indexOf( id ) !== -1;
    }
    render () {
        console.log( 'StoreList: ', this.props );
        return (
            <div className="select-store">
                <h4>
                    Select Store(s)
                    <span className="pull-right blue-botton">
                        <a href="#" onClick={this.all.bind( this )}>All</a> | <a href="#" onClick={this.none.bind( this )}>None</a>
                    </span>
                </h4>
                <ul>
                    {
                        this.state.stores.map( function ( store ) {
                            return (
                                <li>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" checked={this.isChecked(store.id)} value={store.id} onChange={this.onChange.bind( this )} />{store.name}
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

export default StoreList;