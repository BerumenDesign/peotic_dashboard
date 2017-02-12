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
    render () {
        console.log( 'StoreList: ', this.props );
        return (
            <div className="select-store">
                <ul>
                    {
                        this.state.stores.map( function ( store ) {
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

export default StoreList;