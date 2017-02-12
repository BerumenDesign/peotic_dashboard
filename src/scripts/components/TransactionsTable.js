import React, { Component } from 'react';
import _ from 'underscore';

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

export default TransactionsTable;