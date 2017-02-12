import React, { Component } from 'react';
import Highcharts from 'highcharts';

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
        if ( props.series && props.series.length ) {
            this.chart.series[ 0 ].setData( props.series[ 0 ].data );
        }
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

export default DonutChart;