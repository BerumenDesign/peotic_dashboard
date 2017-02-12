import React, { Component } from 'react';
import Highcharts from 'highcharts';

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
    componentWillReceiveProps ( props ) {
        this.chart.series[ 0 ].setData( props.series[ 0 ].data );
    }
    componentDidMount () {
        this.chart = new Highcharts.Chart( this.state.config );
    }
    render () {
        return (
            <div id={ '_chart_' + this.props.id } style={{height: this.props.height || '240px', margin: '0 auto' }}></div>
        )
    }
}

export default LineChart;