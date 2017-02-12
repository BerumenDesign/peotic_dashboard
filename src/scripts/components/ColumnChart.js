import React, { Component } from 'react';
import Highcharts from 'highcharts';

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
    componentWillReceiveProps ( props ) {
        this.chart.series.forEach( function ( series, index ) {
            series.setData( props.series[ index ].data );
        } );
        // this.chart.series[ 0 ].setData( props.series[ 0 ].data );
        this.chart.xAxis[ 0 ].setCategories( props.categories );
    }
    componentDidMount () {
        this.chart = new Highcharts.Chart( this.state.config );
    }
    render () {
        return (
            <div id={'_chart_' + this.props.id} style={{height: this.props.height || '300px', margin: '0 auto'}}></div>
        )
    }
}

export default ColumnChart;